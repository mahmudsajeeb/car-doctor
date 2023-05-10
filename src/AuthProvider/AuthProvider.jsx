import React, { createContext,  useEffect,  useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContect = createContext()
const auth = getAuth(app);

function AuthProvider({children}) {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)

  const createUser = (email,passsword)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,passsword)
  }

  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(()=>{
    
    const unsubscribe = onAuthStateChanged(auth,createUser =>{
      setUser(createUser)
      console.log("current User",createUser)
      setLoading(false)
    })
    return()=>{
      return unsubscribe()
    }
  },[])

  const authInfo ={
      user,
      loading,
      createUser,
      signIn
  }
  return (
    <AuthContect.Provider value={authInfo}>
    {children}
    </AuthContect.Provider>
  )
}

export default AuthProvider
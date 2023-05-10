import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContect } from '../../AuthProvider/AuthProvider';

function SignUp() {
  const {createUser} = useContext(AuthContect)

  const handleSignUp = (e)=>{
      e.preventDefault();
      const form = e.target 
      const name = form.name.value 
      const email = form.email.value
      const password = form.password.value

      createUser(email,password)
      .then(result =>{
        const logginUser = result.user
        console.log(logginUser)
      })
      .catch(error =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      })
  }
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row">
  <div className="text-center lg:text-left w-1/2"> 
    <p className="py-6"><img className='w-full' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000" alt="" />.</p>
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div className="card-body">
    <h1 className="text-3xl text-center font-bold">Sign Up!</h1>
      <form  onSubmit={handleSignUp}>
      
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" name='name' placeholder="name" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name='email' placeholder="email" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" name='password' placeholder="password" className="input input-bordered" />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div className="form-control mt-6">
         
        <input type="submit" className="btn btn-primary" value="Sign Up" />
      </div>
      </form>
      <p>Have You Account? <Link className="text-orange-600 font-semibold" to='/login'>Log In</Link></p>
      
    </div>
  </div>
</div>
</div>
  </div>
  )
}

export default SignUp
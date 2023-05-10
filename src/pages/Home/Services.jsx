import React, { useEffect, useState } from 'react'
import ServicesCard from './ServicesCard'

function Services() {
  const [services,setServices] = useState([])

  useEffect(()=>{
    fetch('services.json')
    .then(res =>res.json())
    .then(data =>setServices(data))
  },[])
  return (
    <div className='mt-7'>
      <div className='text-center'>
      <h3 className='text-2xl font-semibold text-orange-700'>Services</h3>
      <h1 className='text-5xl font-semibold'>Our Service Area</h1>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
      </div>
    <div>

    </div>
       <div className='grid grid-cols-1 lg:grid-cols-3 md-grid-cols-2 gap-6'>
       {services.map(service =><ServicesCard key={service._id}  service={service} />)}
       </div>
    </div>
  )
}

export default Services
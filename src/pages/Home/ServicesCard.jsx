import React from 'react'

function ServicesCard({service}) {
  const {_id,description,img,title,price} = service
  return (
    <div>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="img" className="rounded-xl" />
  </figure>
  <div className="card-body    ">
    <h2 className="card-title">{title}</h2>
    <p className='text-orange-500'>Price:{price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ServicesCard
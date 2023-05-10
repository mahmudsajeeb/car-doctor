import React from 'react'

function Banner() {
  return (
    <div>
            <div className="carousel h-[600px] w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://images.pexels.com/photos/8986148/pexels-photo-8986148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
    <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] text-white  transform flex items-center  left-0 right-0 top-0  bottom-0"> 
    <div className='space-y-7 ml-14 w-1/3'>
    <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p> 
      <div>
      <button className="btn btn-secondary mr-4">Discover More</button>
        <button className="btn btn-warning">Latest Project</button>
      </div>
    </div>
    </div>
    <div className="absolute text-white   flex justify-end  transform -translate-y-1/2 left-5 right-5  bottom-5"> 
      <a href="#slide4" className="btn btn-circle mr-2">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
    <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] flex items-center top-0 left-0 right-0 bottom-0">
    <div className='space-y-7 text-white ml-14 w-1/3'>
    <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p> 
      <div>
      <button className="btn btn-secondary mr-4">Discover More</button>
        <button className="btn btn-warning">Latest Project</button>
      </div>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
      <a href="#slide1" className="btn btn-circle mr-2">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.pexels.com/photos/3807811/pexels-photo-3807811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
    <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] top-0 left-0 right-0 bottom-0 ">
    <div className='space-y-7 text-white ml-14 w-1/3'>
    <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p> 
      <div>
      <button className="btn btn-secondary mr-4">Discover More</button>
        <button className="btn btn-warning">Latest Project</button>
      </div>
    </div>
    </div>
    <div className="absolute flex  justify-end   transform -translate-y-1/2   right-5 bottom-5">
      <a href="#slide2" className="btn btn-circle mr-2">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
   
</div>
    </div>
  )
}

export default Banner
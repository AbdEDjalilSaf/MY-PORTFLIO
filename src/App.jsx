// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css'
import React, { useRef, useState } from 'react';
// import { Mousewheel, Pagination } from 'swiper/modules';

// Import Swiper React components
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

function App() {

const [isOpen,setIsOpen] = useState(true);
const clickMenuSvg = ()=>{
  setIsOpen(!isOpen);
}

return (


<div className='bgHeader '>

<header className='py-7 px-10 md:12 lg:py-9 lg:px-15 xl:pt-18 xl:pb-15 xl:px-20 flex items-center justify-between '>
<a className=' logo appFixed'>S</a>
<ul className='flex gap-10 items-center'>
  <li><a className='textLink hidden md:block  active'>Home</a></li>
  <li><a className='textBase hidden md:block'>PROJECTS</a></li>
  <li><a className='textBase hidden md:block'>ABOUT ME</a></li>
<button onClick={clickMenuSvg} className='md:hidden'>
{isOpen ? <svg xmlns="http://www.w3.org/2000/svg"  fill='#cdf381' viewBox="0 0 448 512" className='w-6 cursor-pointer menuSvg' strokeWidth={0.5}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
 : <svg xmlns="http://www.w3.org/2000/svg" fill='#cdf381' viewBox="0 0 384 512" className='w-6 cursor-pointer'><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>}
</button>
</ul>
</header> 
{/* -------------------------------  landing  ------------------------- */}
<Swiper
direction={'vertical'}
slidesPerView={1}
spaceBetween={30}
mousewheel={true}
pagination={{
  clickable: true,
}}
className="mySwiper"
>
<SwiperSlide>
    <section className='landing  '>
  <div className='flexLanding'>
    <div className='textLanding'>

    </div>
    <div className='imageLanding'>
      <img src='/image/macbook.jpg' className='' />
    </div>
  </div>












    </section>
    </SwiperSlide>











    </Swiper>







    </div>
   

  )
}






{/* <SwiperSlide>Slide 2</SwiperSlide>
<SwiperSlide>Slide 3</SwiperSlide>
<SwiperSlide>Slide 4</SwiperSlide> */}




export default App

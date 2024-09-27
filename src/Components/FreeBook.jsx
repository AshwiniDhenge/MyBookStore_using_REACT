// import React from 'react'
import list from '../../public/list.json'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from '../Components/Cards';
const FreeBook = () => {
  const filterData = list.filter((data) => data.category === "free")
  console.log(filterData);


  // slider setting
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        // breakpoints -1024 >show only 3 cards
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
<br />
    <div className='my-9 pt-10 space-y-10'>


      <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div>
          <h1 className='font-semibold pb-3 text-5xl'>Free  <spam className='text-pink-400 font-bold'>Offered </spam> Courses</h1>
          <p className='my-5'>Our platform is user-friendly and easy to navigate. We aim to provide a comprehensive and enjoyable browsing experience for all book lovers..</p>
          {/* <p className='my-5'> Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, blanditiis. amet consectetur adipisicing elit. Magnam est assumenda facere, tempore error labore.</p> */}
        </div>

        {/* slider with CARD COMPONENT */}
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />

            ))}
          </Slider>
        </div>

      </div>
      </div>


    </>
  )
}

export default FreeBook;




// first we need to import our list.json file into this component/
//then>filter free data >array k sath
// list.json array hi to hai ..list.filter 
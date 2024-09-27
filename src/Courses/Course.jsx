// import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Courses from '../Components/Courses';


const Course = () =>{
return (
    <>
    <Navbar/>
    <div className='mt-16'> 
    <Courses/>
    </div>
  
    <Footer/>
    </>
)
}
export default Course;
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import FreeBook from '../Components/FreeBook';
const Home = () => {
    return (
        <>
        <div className='mt-16   bg-gray-100 dark:bg-slate-900'>
           <Navbar/>
           <Banner/>
           <FreeBook/>
           <Footer/>
           

        </div>
        
        </>
    )
}
export default Home;
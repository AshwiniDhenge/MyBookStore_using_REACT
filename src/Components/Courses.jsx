
import React from 'react';
import Cards from "./Cards";
import list from '../../public/list.json';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <>
      <div className='mt-16 max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            We're delighted to have you <span className='text-pink-500'>Here :)</span>
          </h1>
          <p className='mt-10 text-sm md:text-base px-4 md:px-0'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, necessitatibus. Ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque quas magni repellendus, asperiores magnam quod excepturi incidunt distinctio totam quo consectetur?
          </p>
          <Link to='/'>
            <button className='mt-8 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition duration-300'>
              BACK
            </button>
          </Link>
        </div>

        <div className='mt-20'>
          <h1 className="text-2xl font-semibold md:text-4xl text-center font-serif">Our Premium Courses 📖</h1>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;


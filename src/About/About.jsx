import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {
    return (
        <>
            <Navbar />
            <div className=''>
            <div className= "h-screen space-y-4  mt-16  max-w-4xl mx-auto">
            <br />
            <br />
            <h1 className="  text-4xl font-bold mb-4 text-center font-serif ">About Us</h1>
            <br />
            <div className='p-3 '>

           
                    <p className="  my-4 text-lg leading-relaxed mb-4">
                        Welcome to BookApp! Our platform is designed to offer you a seamless and enriching experience in discovering and exploring a wide variety of books. Whether you're looking for fiction, non-fiction, programming guides, or self-help books, we've got you covered.
                    </p>

                    <p className=" my-4 text-lg leading-relaxed mb-4">
                        At BookApp, our mission is to connect readers with the books they love. We believe in the power of reading to inspire, educate, and entertain. Our curated collection ensures that you find books that match your interests and needs.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Our platform is user-friendly and easy to navigate. You can browse books by category, search for specific titles, and even filter by price. We aim to provide a comprehensive and enjoyable browsing experience for all book lovers.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Join our community of avid readers and explore the vast world of literature with BookApp. We are committed to bringing you the best reading experience and look forward to helping you discover your next favorite book.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Thank you for choosing BookApp. Happy reading!
                    </p>

                    </div>
                </div>
            </div>
            <Footer />


        </>
    )
}

export default About
// // import React from 'react'
// import banner from '../../public/banner.png'
// const Banner = () => {
//     return (
//         <>
//             <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
//                 {/* Left Part */}
//                 <div className="left  order-2 md:order-1 w-full md:w-1/2  mt-12  md:mt-32">

//                     <div className="space-y-12">
//                         <h1 className="text-4xl font-bold">Hello, welcomes here to learn something {""}
//                             <span className="text-pink-500">new everyday!!!</span>
//                         </h1>

//                         <p> At BookApp, we believe in the power of knowledge. Our platform offers a wide range of books that cater to diverse interests, from fiction and science to programming and self-help. Dive into our curated collection and discover something new every day. Whether you're looking to expand your skills or simply enjoy a good story, we've got you covered.</p>
//                         <label className="input input-bordered flex items-center gap-2">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 16 16"
//                                 fill="currentColor"
//                                 className="w-4 h-4 opacity-70"
//                             >
//                                 <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//                                 <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//                             </svg>
//                             <input type="text" className="grow" placeholder="Email" />
//                         </label>
//                     </div>
//                     <button className=" mb-  btn mt-6 btn-secondary">Get Started</button>
//                 </div>

//                 {/* Right  Part*/}
//                 <div className="right order-1 md:order-2 w-full md:w-1/2">
//                     {/* <img src={banner} className='space-y-16 w-86 h-92' alt="" /> */}
//                     <div className=" order-1 w-full mt-20">
//                         <img
//                             src={banner}
//                             className=" md:w-[650px] md:h-[460px] md:ml-12"
//                             alt=""
//                         />
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Banner


// ------------------------------------------------------

// ------------Using Web3 Forms------------------


import React, { useState } from 'react';
import banner from '../../public/banner.png';

const Banner = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const formURL = "https://api.web3forms.com/submit";
        const access_key = "3988f4d8-47d0-4375-a9f3-884e5d45c73a"; // Replace this with your actual Web3 Forms access key

        const data = {
            email,
            access_key: access_key
        };

        try {
            const response = await fetch(formURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setEmail('');
                setStatus('Subscription successful!');
            } else {
                setStatus('Failed to subscribe. Please try again.');
            }
        } catch (error) {
            setStatus('Failed to subscribe. Please try again.');
        }
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 items-center">
                {/* Left Part */}
                <div className="left order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 text-center md:text-left">
                    <div className="space-y-6 md:space-y-12">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Hello, welcome here to learn something{' '}
                            <span className="text-pink-500">new every day!!!</span>
                        </h1>
                        <p className="text-sm md:text-base">
                            At BookApp, we believe in the power of knowledge. Our platform offers a wide range of books
                            that cater to diverse interests, from fiction and science to programming and self-help. Dive
                            into our curated collection and discover something new every day. Whether you're looking to
                            expand your skills or simply enjoy a good story, we've got you covered.
                        </p>
                        <form onSubmit={handleFormSubmit} className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 w-full md:w-2/3">
                            <label className="input input-bordered flex items-center gap-2 w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 opacity-70"
                                >
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input
                                    type="email"
                                    className="grow py-2 px-3"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </label>
                            <button
                                type="submit"
                                className="btn mt-4 md:mt-0 btn-secondary"
                            >
                                Get Started
                            </button>
                        </form>
                        {status && <p className="text-center text-red-500 mt-4">{status}</p>}
                    </div>
                </div>

                {/* Right Part */}
                <div className="right order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
                    <img
                        src={banner}
                        className="w-full md:w-[650px] md:h-[460px] object-cover"
                        alt="Banner"
                    />
                </div>
            </div>
        </>
    );
};

export default Banner;


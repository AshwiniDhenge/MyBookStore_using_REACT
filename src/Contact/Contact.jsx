// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         console.log(formData);
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="  h-screen mt-16 container mx-auto px-4 py-8">

//             <br />
//                 <h1 className="text-3xl font-bold mb-8 text-center">Get in Touch</h1>
//                     <br />
//                 <div className="max-w-4xl mx-auto mb-8">
//                     {/* <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2> */}

//                     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                                 Name
//                             </label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 id="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
//                                 Message
//                             </label>
//                             <textarea
//                                 name="message"
//                                 id="message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 rows="5"
//                                 required
//                             ></textarea>
//                         </div>
//                         <div className="flex items-center justify-between">
//                             <button
//                                 type="submit"
//                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Contact;


// ------------------------------------------------------------------------------

// ---------Using Web3 Forms---------------


import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const formURL = "https://api.web3forms.com/submit";
        const access_key = "3988f4d8-47d0-4375-a9f3-884e5d45c73a"; 
// Replace this with your actual Web3 Forms access key

        const data = {
            ...formData,
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
                setFormData({ name: '', email: '', message: '' });
                setStatus('Form submitted successfully!');
            } else {
                setStatus('Failed to submit form. Please try again.');
            }
        } catch (error) {
            setStatus('Failed to submit form. Please try again.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="h-screen mt-16 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Get in Touch</h1>
                <div className="max-w-4xl mx-auto mb-8">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    {status && <p className="text-center text-red-500 mt-4">{status}</p>}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;

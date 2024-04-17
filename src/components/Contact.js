import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';
function Contact() {
    return (
        <section>
            <div className='contact  opacity-90'>
                <Navbar />
                <div>
                    <h1 className='lg:text-5xl text-4xl text-center lg:p-44 p-48 px-6 lg:px-0 font-bold text-white'>Contact</h1>
                </div>
            </div>
            <div className="container mx-auto">
                <div className=' mt-20 mb-10'>
                    <h1 className='md:text-3xl text-2xl font-bold text-center'>Send a message to us !</h1>
                </div>
                <div className='grid justify-center'>
                    <input type="text" placeholder='Name' className='h-10 md:w-96 w-80 mx-auto rounded shadow-lg border  border-black ' /><br />
                    <input type="text" placeholder='Email' className='h-10 md:w-96 w-80 mx-auto  rounded shadow-lg border  border-black' /><br />
                    <input type="text" placeholder='Subject' className='h-10 md:w-96 w-80 mx-auto rounded shadow-lg border  border-black' /><br />
                    <input type="text" placeholder='Message' className='h-24 md:w-96 w-80 mx-auto rounded-lg shadow-lg border  border-black' /><br />
                    <a href="" className=' md:w-96 w-80 mx-auto rounded shadow-lg text-center bg-gray-200 mb-10 mt-4 p-2 font-bold text-black  hover:bg-violet-500  hover:text-white'>Send Message</a>
                </div>
            </div>
            <Footer />
        </section >
    )
}

export default Contact;
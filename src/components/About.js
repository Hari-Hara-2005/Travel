import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './About.css';
function About() {
    return (<>
        <section>
            <div className='about  opacity-90'>
                <Navbar />
                <div>
                    <h1 className='text-5xl text-center lg:p-44 p-48 px-6 lg:px-0 font-bold text-white'>About</h1>
                </div>
            </div>
            <div className="container mx-auto">
                <div className='lg:p-20 p-10'>
                    <h1 className='md:text-4xl text-2xl font-bold '>Our History</h1>
                    <p className='md:mt-5 mt-3'>Lorem ipsum dolor sit amet  Iusto enim, nihil sapiente nobis iste laboriosam earum dolor minima fuga at accusantium expedita adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia similique tempore, ab molestiae aliquam voluptatibus quod obcaecati ea voluptatem, rerum sit blanditiis veniam. Vitae sint ipsa in possimus adipisci. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ad eius officiis atque vero tempora nisi laborum possimus, dolorum laboriosam dolore consequuntur fuga tenetur. Repudiandae laborum rem voluptatem animi excepturi.</p>
                </div>
                <div className='lg:p-20 p-10 py-0'>
                    <h1 className='md:text-4xl text-2xl font-bold '>Our Vision</h1>
                    <p className='md:mt-5 mt-3'>Lorem ipsum dolor sit amet  Iusto enim or sit, amet consectetur adipisicing elit. Deleniti ad eius officiis atque vero tempora nisi laborum possimus, dolorum laboriosam dolore consequuntur fuga tenetur. Repudiandae laborum rem voluptatem animi excepturi.</p>
                </div>
                <div className=' lg:p-20 p-10 py-10'>
                    <h1 className='md:text-4xl text-2xl font-bold '>Our Mission</h1>
                    <p className='md:mt-5 mt-3'>Lorem ipsum dolor sit.dolorum laboriosam dolore consequuntur fuga tenetur. Repudiandae laborum rem voluptatem animi excepturi.</p>
                </div>
            </div>
            <Footer />
        </section >
    </>)
}

export default About;
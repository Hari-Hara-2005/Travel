import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import card_5 from "./assets/5.jpg";
import card_6 from "./assets/6.jpg";
import card_8 from "./assets/8.jpg";
function Service() {
    return (
        <section>
            <div className='about  opacity-90'>
                <Navbar />
                <div>
                    <h1 className='lg:text-5xl text-4xl text-center lg:p-44 p-48 px-6 lg:px-0 font-bold text-white'>Service</h1>
                </div>
            </div>
            <div className="container mx-auto">
                <div>
                    <h1 className="md:text-4xl text-2xl mt-8 lg:mt-16 font-bold text-center ">Recent Trips</h1>
                    <p className='text-center md:text-xl mt-2 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit. Accusantium, deleniti! Libero.</p>
                </div>
                <div className='md:flex flex-wrap justify-center '>
                    <div className='lg:w-1/3 md:w-1/2 p-8 lg:p-16 w-full'>
                        <div className='bg-black-800 rounded-2xl shadow-2xl pt-2  pb-5' >
                            <img style={{ width: '100%', height: '200px' }} className="rounded-t-2xl opacity-90" src={card_5} />
                            <h1 className='text-lg font-bold ml-6 mt-3'>Trip in indonesia</h1>
                            <p className=' ml-5 mt-1 p-1 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia alias consequuntur, delectus reiciendis vel harum. Voluptatibus, mollitia quam eveniet porro quod natus, reprehenderit iste quibusdam dignissimos dolorum temporibus similique illo.</p>
                        </div>
                    </div>
                    <div className='lg:w-1/3 p-8 lg:p-16 w-full md:w-1/2'>
                        <div className='bg-black-800 rounded-2xl shadow-2xl pt-2  pb-5'>
                            <img style={{ width: '100%', height: '200px' }} className="rounded-t-2xl opacity-90" src={card_8} />
                            <h1 className='text-lg font-bold ml-6 mt-3'>Trip in indonesia</h1>
                            <p className=' ml-5 mt-1 p-1 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia alias consequuntur, delectus reiciendis vel harum. Voluptatibus, mollitia quam eveniet porro quod natus, reprehenderit iste quibusdam dignissimos dolorum temporibus similique illo.</p>
                        </div>
                    </div>

                    <div className='lg:w-1/3 p-8 lg:p-16 w-full md:w-1/2'>
                        <div className='bg-black-800 rounded-2xl shadow-2xl pt-2  pb-5'>
                            <img style={{ width: '100%', height: '200px' }} className="rounded-t-2xl opacity-90" src={card_6} />
                            <h1 className='text-lg font-bold ml-6 mt-3'>Trip in indonesia</h1>
                            <p className=' ml-5 mt-1 p-1 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia alias consequuntur, delectus reiciendis vel harum. Voluptatibus, mollitia quam eveniet porro quod natus, reprehenderit iste quibusdam dignissimos dolorum temporibus similique illo.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section >
    )
}

export default Service

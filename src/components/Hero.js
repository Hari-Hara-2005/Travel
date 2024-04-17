import Navbar from "./Navbar";
import React from 'react'
import card_1 from "./assets/2.jpg";
import card_2 from "./assets/1.jpg";
import card_5 from "./assets/5.jpg";
import card_6 from "./assets/6.jpg";
import card_8 from "./assets/8.jpg";
import './Hero.css';
import Footer from "./Footer";
const Hero = () => {
    return (<>
        <section className="opacity-90">
            <div className="hero">
                <div className="container mx-auto">
                    <Navbar />
                    <div className="lg:mt-60 md:mt-96  mt-44">
                        <h1 className="md:text-6xl text-4xl font-bold mb-8 text-center">Your Journey Your Stroy</h1>
                        <div className="flex justify-center">
                            <a href="" className="bg-white hover:text-purple-700 hover:bg-gray-300 text-black  px-6 py-3 rounded-lg p-2 font-bold">Travel Plan</a>
                        </div>
                        <p className="mt-5 text-lg font-semibold text-center mb-72 ml-5 text-gray-300">Choose Your Favourite Destination.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container mx-auto">
                <div className="">
                    <h1 className="md:text-4xl text-2xl mt-8 font-bold text-center"> Popular Destinations</h1>
                    <p className='text-center md:text-xl mt-2 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit. Accusantium, deleniti! Libero.</p>
                </div>
                <div className='md:flex flex-wrap'>
                    <div className='lg:hidden flex w-full justify-center md:mt-5'>
                        <img style={{ width: '40%', height: '80%', borderRadius: '10px' }} className="w-1/2 mt-20 shadow-lg shadow-zinc-400 opacity-90" src={card_2} />
                        <img style={{ width: '40%', height: '80%', borderRadius: '10px' }} className="  w-1/2 ml-8 shadow-lg shadow-zinc-400 mt-10 opacity-90" src={card_1} />
                    </div>
                    <div className='lg:w-1/2 w-full md:p-16 p-10 lg:mt-20'>
                        <h1 className='text-2xl font-bold'>Taal Volcano,Batangas</h1>
                        <p className='md:mt-5 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus labore necessitatibus vero laboriosam quo ad deserunt fugit quos deleniti voluptatem ducimus optio ullam at, tempora, asperiores harum veritatis omnis laudantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugiat nostru unde magni reiciendis! Natus, omnis doloremque. Officiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='w-1/2 lg:flex hidden'>
                        <img style={{ width: '40%', height: '80%', borderRadius: '10px' }} className="w-1/2 mt-20 shadow-lg shadow-zinc-400 opacity-90 " src={card_2} />
                        <img style={{ width: '40%', height: '80%', borderRadius: '10px' }} className="  w-1/2 ml-10 shadow-lg shadow-zinc-400 mt-10 opacity-90" src={card_1} />
                    </div>
                    <div className=' w-full lg:w-1/2 flex justify-center lg:mt-16'>
                        <img style={{ width: '40%', height: '80%', borderRadius: '10px' }} className="w-1/2 lg:mt-20 mt-10 shadow-lg shadow-zinc-400 opacity-90" src={card_5} />
                        <img style={{ width: '40%', height: '80%', borderRadius: '10px' }} className="w-1/2 ml-8 shadow-lg shadow-zinc-400 mt-15 opacity-90" src={card_2} />
                    </div>
                    <div className='lg:w-1/2 w-full  md:p-16 p-10 lg:mt-10'>
                        <h1 className='text-2xl font-bold'>Taal Volcano,Batangas</h1>
                        <p className='md:mt-5 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus labore necessitatibus vero laboriosam quo ad deserunt fugit quos deleniti voluptatem ducimus optio ullam at, tempora, asperiores harum veritatis omnis laudantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugiat nostrum, quasi nesciunt facilis dolore laudantium distinctio nam accusamus fuga dicta perferendis doloremqu.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container mx-auto">
                <div>
                    <h1 className="md:text-4xl text-2xl mt-8 lg:mt-16 font-bold text-center ">Recent Trips</h1>
                    <p className='text-center md:text-xl mt-2 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit. Accusantium, deleniti! Libero.</p>
                </div>
                <div className='md:flex flex-wrap justify-center '>
                    <div className='lg:w-1/3 md:w-1/2 p-8 lg:p-16 w-full'>
                        <div className='bg-black-800 rounded-3xl shadow-2xl shadow-zinc-400 pt-2 md:p-5 pb-5 p-10' >
                            <img style={{ width: '100%', height: '200px' }} className="rounded  shadow-lg mt-5 opacity-90" src={card_5} />
                            <h1 className='text-lg font-bold  mt-3 ml-3'>Trip in indonesia</h1>
                            <p className=' p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia alias consequuntur, delectus reiciendis vel harum. Voluptatibus, mollitia quam eveniet porro quod natus, reprehenderit iste quibusdam dignissimos dolorum temporibus similique illo.</p>
                        </div>
                    </div>
                    <div className='lg:w-1/3 p-8 lg:p-16 w-full md:w-1/2'>
                        <div className='bg-black-800 rounded-3xl shadow-2xl shadow-zinc-400 pt-2 md:p-5 pb-5 p-10'>
                            <img style={{ width: '100%', height: '200px' }} className="rounded  shadow-lg  mt-5 opacity-90" src={card_8} />
                            <h1 className='text-lg font-bold mt-3 ml-3'>Trip in indonesia</h1>
                            <p className=' p-3  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia alias consequuntur, delectus reiciendis vel harum. Voluptatibus, mollitia quam eveniet porro quod natus, reprehenderit iste quibusdam dignissimos dolorum temporibus similique illo.</p>
                        </div>
                    </div>

                    <div className='lg:w-1/3 p-8 lg:p-16 w-full md:w-1/2'>
                        <div className='bg-black-800 rounded-3xl shadow-2xl  shadow-zinc-400 pt-2 md:p-5 pb-5 p-10'>
                            <img style={{ width: '100%', height: '200px' }} className="rounded  shadow-lg mt-5 opacity-90" src={card_6} />
                            <h1 className='text-lg font-bold mt-3 ml-3'>Trip in indonesia</h1>
                            <p className=' p-3 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia alias consequuntur, delectus reiciendis vel harum. Voluptatibus, mollitia quam eveniet porro quod natus, reprehenderit iste quibusdam dignissimos dolorum temporibus similique illo.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section >
        <Footer />
    </>);
};
export default Hero;
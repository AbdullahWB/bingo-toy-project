import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';

const Banner = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleUser = () => {
        if (!user) {
            Swal.fire(
                'Login First',
                'You Have to Log in First To View Details',
                'question'
            )
            navigate('/login');
            return;
        }
    };
    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-6 pb-[130px] pt-[50px] px-[20px]' data-aos="slide-up" data-aos-easing="ease-in-out" data-aos-duration="2000">
            <div className='grid grid-rows-2 gap-6'>
                <div className='grid grid-cols-2 gap-3 bg-[#FAF8F4] p-10 pr-0 items-center'>
                    <div className="text">
                        <p className='font-semibold'>Robotic Arm</p>
                        <h1 className='text-2xl font-bold text-[#72A4E0] my-5'>Learning Robotic For age 8-12</h1>
                        <Link onClick={handleUser} to='/allToys' className='btn btn-outline btn-primary'>Shope Now <FaArrowRight className='ml-2'></FaArrowRight></Link>
                    </div>
                    <div className="img w-full h-full">
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/8xyCZTv/two-friends-doing-science-experiments-with-robotic-car-23-2148778943-removebg-preview.png" alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-3 bg-[#EFF5EA] p-10 pr-0 items-center'>
                    <div className="text">
                        <p className='font-semibold'>New In</p>
                        <h1 className='text-2xl font-bold text-[#63AB07] my-5'>ColorFull Abacus For age 3-5</h1>
                        <p className='text-xl text-gray-800 font-semibold mb-5'>20.45$</p>
                        <Link onClick={handleUser} to='/allToys' className='btn btn-outline btn-primary'>Shope Now <FaArrowRight className='ml-2'></FaArrowRight></Link>
                    </div>
                    <div className="img w-full h-full">
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/FWRmB1d/full-shot-boy-playing-with-colorful-toy-23-2149355236-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='lg:col-span-2'>
                <div className='h-full bg-[#FFF2DF] p-6 flex flex-col justify-center items-center'>
                    <div className="text-center">
                        <p className='font-semibold'>CHECK OUT OUR LATEST ADDITION</p>
                        <h1 className='text-7xl font-bold text-[#AD5536] my-5'>Chemical Fluid</h1>
                        <p >little boy and girl as chemist doing experiment with chemical fluid in the laboratory</p>
                    </div>
                    <div className="img">
                        <img className='object-cover' src="https://i.ibb.co/yqCqg7L/two-cute-children-chemistry-lesson-making-experiments-155003-9063-removebg-preview.png" alt="" />
                    </div>
                    <Link onClick={handleUser} to='/allToys' className='btn btn-primary mt-10 text-white'>Shope Now <FaArrowRight className='ml-2'></FaArrowRight></Link>
                </div>
            </div>
            <div className='grid grid-rows-2 gap-6'>
                <div className='grid grid-cols-2 gap-3 bg-[#EAF5F6] p-10 pr-0 items-center'>
                    <div className="text">
                        <p className='font-semibold'>Top Rated</p>
                        <h1 className='text-2xl font-bold text-[#56878D] my-5'>ColorFull Abacus and Numbers For Your Kids</h1>
                        <p className='text-xl text-gray-800 font-semibold mb-5'>28.45$</p>
                        <Link onClick={handleUser} to='/allToys' className='btn btn-outline btn-primary'>Shope Now <FaArrowRight className='ml-2'></FaArrowRight></Link>
                    </div>
                    <div className="img w-full h-full">
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/b1kRZRm/kid-with-letters-game-23-2148551595-removebg-preview.png" alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-3 bg-[#F9F4EC] p-10 pr-0 items-center'>
                    <div className="text">
                        <p className='font-semibold'>New In/ Top Rated</p>
                        <h1 className='text-2xl font-bold text-[#C61431] my-5'>Drone for kids</h1>
                        <p className='text-xl text-gray-800 font-semibold mb-5'>50.65$</p>
                        <Link onClick={handleUser} to='/allToys' className='btn btn-outline btn-primary'>Shope Now <FaArrowRight className='ml-2'></FaArrowRight></Link>
                    </div>
                    <div className="img w-full h-full">
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/G3DXngN/unfocused-kid-learning-science-nature-23-2148762030-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
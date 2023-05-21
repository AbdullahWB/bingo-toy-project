import React from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto lg:h-[350px] px-5 lg:px-0 mb-[130px]' data-aos="slide-down" data-aos-easing="ease-in-out" data-aos-duration="2000">
            <div className='relative bg-[#5CDEFF] rounded-lg p-10'>
                <img className='w-auto h-[250px]' src="https://i.ibb.co/9tN30LB/little-boy-wearing-blue-helmet-sitting-playing-with-construction-equipment-toy-white-1150-15587-remo.png" alt="" />
                <div className='absolute inset-0 text-white p-10 flex flex-col justify-center items-end text-right'>
                    <h1 className='text-4xl font-bold capitalize'>construction <br /> equipment toy</h1>
                    <p className='my-5'>little boy wearing blue helmet sitting and <br /> playing with construction equipment toy on white</p>
                    <Link className='btn btn-primary rounded-full w-32 text-white' to='/allToys'>Shop Now</Link>
                </div>
            </div>
            <div className='relative bg-[#B94633] rounded-lg p-10'>
                <img className='w-auto h-[250px]' src="https://i.ibb.co/ZV9V2Dm/smiley-girl-doing-science-experiments-23-2148778940-removebg-preview.png" alt="" />
                <div className='absolute inset-0 text-white p-10 flex flex-col justify-center items-end text-right'>
                    <h1 className='text-4xl font-bold capitalize'>science experiments</h1>
                    <p className='my-5'>A girl science experiments using some <br /> electronic particles</p>
                    <Link className='btn btn-primary rounded-full w-32 text-white' to='/allToys'>Shop Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Offer;
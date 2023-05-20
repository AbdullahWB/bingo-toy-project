import React from 'react';
import errorPage from '../../assets/94019-404-animation.json'
import { Link, useRouteError } from 'react-router-dom';
import Lottie from 'lottie-react'

const Error = () => {
    const { error } = useRouteError()
    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <div className='flex justify-center items-center w-[700px]'>
                <Lottie animationData={errorPage} loop={true} />
            </div>
            <div className='max-w-md text-center'>
                <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                    {error?.message}
                </p>
                <Link to='/' className='btn btn-primary text-white'>
                    Back to homepage
                </Link>
            </div>
        </div>
    );
};

export default Error;
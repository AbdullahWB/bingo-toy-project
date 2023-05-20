import React from 'react';
import loader from '../../assets/95585-progress-bar-simple-loading-animation.json'
import Lottie from 'lottie-react'

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <Lottie animationData={loader} loop={true} />
        </div>
    );
};

export default Loading;
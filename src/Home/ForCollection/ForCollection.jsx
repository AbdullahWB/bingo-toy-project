import React from 'react';

const ForCollection = () => {
    return (
        <div className='max-w-7xl mx-auto mb-[130px] text-center' data-aos="slide-left" data-aos-easing="ease-in-out" data-aos-duration="2000">
            <h1 className='text-6xl text-primary font-light text-center'>Shope Product By Age</h1>
            <p className='text-xl text-center my-8'>Our Collection</p>
            <div className='grid grid-cols-6 gap-14'>
                <div className='hover:scale-105 transition-all cursor-pointer'>
                    <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img1.png?v=1676031096" alt="" />
                    <h3 className='text-xl font-bold hover:text-primary'>For Baby</h3>
                </div>
                <div className='hover:scale-105 transition-all cursor-pointer'>
                    <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img2.png?v=1676031123" alt="" />
                    <h3 className='text-xl font-bold hover:text-primary'>1 to 2 years</h3>
                </div>
                <div className='hover:scale-105 transition-all cursor-pointer'>
                    <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img3.png?v=1676029617" alt="" />
                    <h3 className='text-xl font-bold hover:text-primary'>2 to 4 years</h3>
                </div>
                <div className='hover:scale-105 transition-all cursor-pointer'>
                    <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img4.png?v=1676031270" alt="" />
                    <h3 className='text-xl font-bold hover:text-primary'>5 to 7 years</h3>
                </div>
                <div className='hover:scale-105 transition-all cursor-pointer'>
                    <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img5.png?v=1676031270" alt="" />
                    <h3 className='text-xl font-bold hover:text-primary'>8 to 11 years</h3>
                </div>
                <div className='hover:scale-105 transition-all cursor-pointer'>
                    <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img6.png?v=1676031270" alt="" />
                    <h3 className='text-xl font-bold hover:text-primary'>12 years & up</h3>
                </div>
            </div>
        </div>
    );
};

export default ForCollection;
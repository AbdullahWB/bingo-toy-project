import React, { useEffect, useState } from 'react';
import TabCart from './TabCart';

const Tabs = () => {
    const [tabs, setTabs] = useState([])
    const [activeTab, setActiveTab] = useState("Science");
    useEffect(() => {
        fetch(`http://localhost:3000/products/${activeTab}`)
            .then(res => res.json())
            .then(data => setTabs(data))
    }, [activeTab])

    console.log(tabs);

    const handleClickTab = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className='max-w-7xl mx-auto' data-aos="slide-up" data-aos-easing="ease-in-out" data-aos-duration="2000">
            <div className='grid lg:grid-cols-4 w-full h-full gap-8 p-5 lg:px-0'>
                <div onClick={() => handleClickTab("Science")} className='bg-[#6F5EFA] flex justify-between w-full h-full items-center rounded-lg p-5 cursor-pointer hover:scale-105 transition-all'>
                    <img className='w-auto h-[110px]' src="https://i.ibb.co/j6CKDLf/science-word-concept-23-2148533907-removebg-preview.png" alt="" />
                    <h1 className='text-4xl font-bold text-white'>Science</h1>
                </div>
                <div className='lg:col-span-2 grid grid-rows-2 gap-5'>
                    <div onClick={() => handleClickTab("Language")} className='bg-[#504F81] flex w-full h-full justify-between items-center rounded-lg p-5 cursor-pointer hover:scale-105 transition-all'>
                        <img className='w-auto h-[100px]' src="https://i.ibb.co/SmrmcXD/hand-drawn-flat-world-children-s-day-illustration-23-2149113362-removebg-preview.png" alt="" />
                        <h1 className='text-4xl font-bold text-white'>Language</h1>
                    </div>
                    <div onClick={() => handleClickTab("Engineering")} className='bg-[#5EF3F9] flex w-full h-full justify-between items-center rounded-lg p-5 cursor-pointer hover:scale-105 transition-all'>
                        <img className='w-auto h-[100px]' src="https://i.ibb.co/KN96RYr/817-OCL93-QL-AC-SL1500-removebg-preview.png" alt="" />
                        <h1 className='text-4xl font-bold text-white'>Engineering</h1>
                    </div>
                </div>
                <div onClick={() => handleClickTab("Math")} className='bg-[#FF368C] flex w-full h-full justify-between items-center rounded-lg p-5 cursor-pointer hover:scale-105 transition-all'>
                    <img className='w-auto h-[110px]' src="https://i.ibb.co/ZM4wz3p/553-5535721-mathematics-clipart-pics-math-clipart-hd-png-download-removebg-preview.png" alt="" />
                    <h1 className='text-4xl font-bold text-white'>Math</h1>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 gap-7 my-[100px] px-5 lg:px-0'>
                {
                    tabs.map(tab => <TabCart
                        key={tab._id}
                        tab={tab}
                    ></TabCart>)
                }
            </div>
        </div>
    );
};

export default Tabs;
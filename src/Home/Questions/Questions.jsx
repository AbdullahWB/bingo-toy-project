import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Questions = () => {
    return (
        <div data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" className='max-w-7xl mx-auto mb-[130px]'>
            <h1 className='text-6xl text-primary font-light text-center'>Frequently Asked Questions</h1>
            <p className='text-xl text-center my-8'>Find your answer from here</p>
            <div className='grid px-5 lg:px-0 lg:grid-cols-2 gap-10'>
                <div className='grid grid-rows-2 gap-5'>
                    <div className='grid grid-cols-2 gap-5'>
                        <img className='w-full h-full object-cover rounded-lg' src="https://img.freepik.com/free-photo/close-up-making-robots_23-2148863354.jpg?w=1380&t=st=1684647348~exp=1684647948~hmac=58a73bd7b4f2eb920ea6d6c8faaf797d52ad679ab20552a1fd0c0fd53714e592" alt="" />
                        <img className='w-full h-full object-cover rounded-lg' src="https://img.freepik.com/free-photo/math-rulers-supplies-with-science-symbols-abacus_23-2148416080.jpg?w=1380&t=st=1684647404~exp=1684648004~hmac=c13405173597e0bf53243b6def962eedc908eeffd909e26f78b173bbc8c50974" alt="" />
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <img className='w-full h-full object-cover rounded-lg' src="https://img.freepik.com/free-photo/kid-playing-with-toy-train_23-2148131009.jpg?w=1380&t=st=1684647514~exp=1684648114~hmac=84c428bbaf0bd6aff5671478a456972b115d3db3c325029b4b5d6488427ceb95" alt="" />
                        <img className='w-full h-full object-cover rounded-lg' src="https://img.freepik.com/free-photo/top-view-child-desk-learning-numbers-letters_23-2148524551.jpg?w=1380&t=st=1684647555~exp=1684648155~hmac=e9944e6bcede231d8f57999c0b386b63e7e40b7210a51ded83b7bc4bf81d7554" alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        What age group are these toys suitable for?
                        </div>
                        <div className="collapse-content">
                            <p>Our toys are designed for children aged 3 and above.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        Are the toys safe for children to play with?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, all our toys undergo rigorous safety testing to ensure they meet the highest safety standards.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        Do you offer international shipping?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we offer worldwide shipping. Additional shipping charges may apply for international orders.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        What is your return policy?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, all our toys undergo rigorous safety testing to ensure they meet the highest safety standards.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        Can I track my order?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, once your order is shipped, we will provide you with a tracking number to track the status of your package.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
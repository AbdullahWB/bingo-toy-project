import React from 'react';
import login from '../../assets/129750-login-orange.json'
import profile from '../../assets/107137-add-profile-picture.json'
import Lottie from 'lottie-react'

const SingUp = () => {
    const handleSingData = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);
    }
    return (
        <div className='grid grid-cols-2 gap-8 max-w-7xl mx-auto'>
            <div>
                <Lottie animationData={login} loop={true} />
            </div>
            <div className='border w-[80%]'>
                <div className="flex flex-col justify-center items-center">
                    <div className='w-[150px]'>
                        <Lottie animationData={profile} loop={true} />
                    </div>
                    <h2 className='text-3xl text-primary font-semibold my-5'>SingUp Your Profile</h2>
                </div>
                <form onSubmit={handleSingData} className='flex flex-col justify-center items-center gap-3'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name Hear" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email Hear" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password Hear" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Profile URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL Hear" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn btn-outline btn-primary' type="submit" value="SingUp" />
                </form>
            </div>
        </div>
    );
};

export default SingUp;
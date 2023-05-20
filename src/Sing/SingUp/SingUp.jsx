import React, { useContext, useState } from 'react';
import login from '../../assets/129750-login-orange.json'
import profile from '../../assets/107137-add-profile-picture.json'
import { FaGoogle, FaEye, FaEyeSlash  } from "react-icons/fa";
import Lottie from 'lottie-react'
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const SingUp = () => {
    const { singUp } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    // const navigate = useNavigate();
    // const location = useLocation()
    // const from = location.state?.from?.pathname || '/'




    const handleSingData = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        singUp(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                // navigate(from, { replace: true })
            })
            .catch(error => {
                const err = (error.message);
                toast.error(err)
            })
    }
    return (
        <div className='grid grid-cols-2 gap-8 max-w-7xl mx-auto mt-[50px] mb-[100px]'>
            <div>
                <Lottie animationData={login} loop={true} />
            </div>
            <div className='justify-center flex flex-col items-center'>
                <div className='w-[80%] card bg-base-100 shadow-xl py-10'>
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
                        <div className="relative form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <input type={show ? "text" : "password"} name="password" placeholder="Password Hear" className="input input-bordered w-full max-w-xs" />
                            <span className='text-[20px] inline-block absolute right-[10px] top-[50px] cursor-pointer' onClick={() => setShow(!show)}>
                                <span>
                                    {
                                        show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </span>
                            </span>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Profile URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL Hear" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <input className='btn btn-outline btn-primary mt-5 text-white' type="submit" value="SingUp" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;
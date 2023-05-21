import React, { useContext, useState } from 'react';
import login from '../../assets/129750-login-orange.json'
import profile from '../../assets/107137-add-profile-picture.json'
import { FaGoogle, FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import Lottie from 'lottie-react'
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SingUp = () => {
    const { singUp, singInGoogle, singInGithub } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'


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
                navigate(from, { replace: true })
            })
            .catch(error => {
                const err = (error.message);
                toast.error(err)
            })
    }


    const handleSingUpGoogle = () => {
        singInGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                const err = (error.message);
                toast.error(err)
            })
    }

    const handleSingUpGithub = () => {
        singInGithub()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                const err = (error.message);
                toast.error(err)
            })
    }



    return (
        <div className='grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mt-[50px] mb-[100px]'>
            <div>
                <Lottie className='h-full' animationData={login} loop={true} />
            </div>
            <div className='justify-center flex flex-col items-center'>
                <div className='lg:w-[80%] w-[90%] card bg-base-100 shadow-xl py-10'>
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

                        <div className='flex justify-center items-center flex-col'>
                            <input className='btn btn-outline btn-primary mt-5 mb-5 text-white' type="submit" value="SingUp" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='mb-5'>or sign in with other accounts?</p>
                                <div className='grid gap-8 grid-cols-2'>
                                    <button onClick={handleSingUpGoogle} className="btn btn-outline btn-accent"><FaGoogle className='mr-2'></FaGoogle> Google</button>
                                    <button onClick={handleSingUpGithub} className="btn btn-outline btn-secondary"><FaGithub className='mr-2'></FaGithub> GitHub</button>
                                </div>
                                <p className='mt-5'>Already have an Account <Link to='/login' className='text-primary'>Sign In</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;
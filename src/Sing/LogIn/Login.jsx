import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import login from '../../assets/129750-login-orange.json'
import profile from '../../assets/107137-add-profile-picture.json'
import Lottie from 'lottie-react'
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const handleSingData = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
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
                        <h2 className='text-3xl text-primary font-semibold my-5'>SingIn Your Profile</h2>
                    </div>
                    <form onSubmit={handleSingData} className='flex flex-col justify-center items-center gap-3'>
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
                        <input className='btn btn-outline btn-primary mt-5 text-white' type="submit" value="SingIn" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Profile = () => {
    const { user, profileUpdate } = useContext(AuthContext)

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;

        profileUpdate(name, photo)
            .then()
            .catch(error => {
                const err = (error.message);
                toast.error(err)
            })
    }

    return (
        <div className='max-w-7xl mx-auto bg-[rgba(229,125,65,0.1)] flex flex-col p-20 mt-[50px] mb-[130px] rounded-xl'>
            <div>
                <h1 className='text-4xl text-black'>Your Profile. You Need to Change This </h1>
                <div className='flex mt-10'>
                    <img className='w-24 rounded-xl' src={user?.photoURL} alt="" />
                    <div className='md:ml-5 mt-10 md:mt-0'>
                        <h1 className='md:text-2xl'>Name: {user?.displayName}</h1>
                        <p className='md:text-xl'>Email: {user?.email}</p>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='text-2xl mb-5'>You want to change anything</h1>
                <form onSubmit={handleUpdate} className='flex gap-5'>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />
                    <input className='btn btn-primary text-white' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Profile;
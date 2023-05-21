import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import { toast } from 'react-hot-toast';

const AddToy = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useTitle('Add Toy');
    const onSubmit = data => {
        fetch("https://bingo-toy-server.vercel.app/addToy", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Your Products added successfully ✅')
            })
        console.log(data)
    };
    return (
        <div className='my-[100px] max-w-7xl mx-auto'>
            <form className='bg-[rgba(229,125,65,0.1)] rounded-lg lg:p-20 p-3 lg:mx-0 mx-5' onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className='grid lg:grid-cols-2 gap-8'>
                    <input
                        className="input w-full border border-primary"
                        {...register("name", { required: true })}
                        placeholder="Product Name"
                    />

                    <input
                        className="input w-full border border-primary"
                        {...register("picture", { required: true })}
                        placeholder="Photo URL"
                        type='url'
                    />
                </div>
                <div className='grid lg:grid-cols-2 gap-8 my-16'>
                    <input
                        className="input w-full border border-primary"
                        {...register("seller_name", { required: true })}
                        placeholder="Seller Name"
                        value={user?.displayName}
                    />
                    <input
                        className="input w-full border border-primary"
                        {...register("seller_email", { required: true })}
                        placeholder="Seller email"
                        value={user?.email}
                        type="email"
                    />
                </div>
                <div className='grid lg:grid-cols-3 gap-8'>
                    <input
                        className="input w-full border border-primary"
                        {...register("category", { required: true })}
                        placeholder="Category Name"
                        value="Educational"
                    />
                    <select className="input w-full border border-primary" {...register("sub_category")}>
                        <option value="Language">Language</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Science">Science</option>
                        <option value="Math">Math</option>
                    </select>
                    <input
                        className="input w-full border border-primary"
                        {...register("price")}
                        placeholder="Product Price"
                        type="number"
                    />

                </div>
                <div className='grid lg:grid-cols-2 gap-8 mt-16'>
                    <input
                        className="input w-full border border-primary"
                        {...register("rating")}
                        placeholder="Product Rating"
                        type='number'
                        step="0.01"
                    />
                    <input
                        className="input w-full border border-primary"
                        {...register("available_quantity")}
                        placeholder="Product Quantity"
                        type='number'
                    />
                </div>
                <div className='grid lg:grid-cols-1 gap-8 mt-16'>
                    <input
                        className="input w-full border border-primary"
                        {...register("product_details")}
                        placeholder="Product Description"
                        type='text'
                    />
                </div>
                <input type="submit" className='btn btn-primary text-white mt-10 w-full' />
            </form>
        </div>
    );
};

export default AddToy;
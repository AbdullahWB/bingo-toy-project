import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';

const AddToy = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='my-[100px] max-w-7xl mx-auto'>
            <form className='bg-[rgba(229,125,65,0.1)] rounded-lg p-20' onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className='grid grid-cols-2 gap-8'>
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
                <div className='grid grid-cols-2 gap-8 my-16'>
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
                <div className='grid grid-cols-3 gap-8'>
                    <input
                        className="input w-full border border-primary"
                        {...register("category", { required: true })}
                        placeholder="Category Name"
                        value="Educational"
                    />
                    <select className="input w-full border border-primary" {...register("sub_category")}>
                        <option value="Engineering">Language</option>
                        <option value="Editor">Engineering</option>
                        <option value="writer">Science</option>
                        <option value="Developer">Math</option>
                    </select>
                    <input
                        className="input w-full border border-primary"
                        {...register("price")}
                        placeholder="Product Price"
                        type="number"
                    />

                </div>
                <div className='grid grid-cols-2 gap-8 mt-16'>
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
                <div className='grid grid-cols-1 gap-8 mt-16'>
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
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from "react-hook-form";

const Modal = ({ myToy }) => {
    const { picture, product_details, seller_email, seller_name, available_quantity, sub_category, category, rating, price, name } = myToy
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form className='bg-[rgba(229,125,65,0.1)] rounded-lg p-20' onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className='grid grid-cols-2 gap-8'>
                            <input
                                className="input w-full border border-primary"
                                {...register("name", { required: true })}
                                placeholder="Product Name"
                                defaultValue={name}
                            />

                            <input
                                className="input w-full border border-primary"
                                {...register("picture", { required: true })}
                                placeholder="Photo URL"
                                type='url'
                                defaultValue={picture}
                            />
                        </div>
                        <div className='grid grid-cols-2 gap-8 my-16'>
                            <input
                                className="input w-full border border-primary"
                                {...register("seller_name", { required: true })}
                                placeholder="Seller Name"
                                // value={user?.displayName}
                                defaultValue={seller_name}
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
                                defaultValue={price}
                            />

                        </div>
                        <div className='grid grid-cols-2 gap-8 mt-16'>
                            <input
                                className="input w-full border border-primary"
                                {...register("rating")}
                                placeholder="Product Rating"
                                type='number'
                                step="0.01"
                                defaultValue={rating}
                            />
                            <input
                                className="input w-full border border-primary"
                                {...register("available_quantity")}
                                placeholder="Product Quantity"
                                type='number'
                                defaultValue={available_quantity}
                            />
                        </div>
                        <div className='grid grid-cols-1 gap-8 mt-16'>
                            <input
                                className="input w-full border border-primary"
                                {...register("product_details")}
                                placeholder="Product Description"
                                type='text'
                                defaultValue={product_details}
                            />
                        </div>
                        <input type="submit" className='btn btn-primary text-white mt-10 w-full' />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn btn-primary text-white">close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
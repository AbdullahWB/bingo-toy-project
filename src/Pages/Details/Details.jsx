import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Details = () => {
    const details = useLoaderData()
    const { _id, picture, product_details, seller_email, seller_name, available_quantity, sub_category, category, rating, price, name } = details || {};
    useTitle('Details')
    return (
        <div className='mt-[50px] mb-[130px] max-w-7xl mx-auto '>
            <div className='grid mx-5 lg:grid-cols-2 gap-9 shadow-xl p-8 rounded-xl'>
                <div>
                    <img className='rounded-xl' src={picture} alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-xl mb-3'><span className='font-bold text-xl text-black'>Name:</span> {name}</h1>
                    <div className='flex gap-8'>
                        <p className='text-xl mb-3'><span className='text-xl font-bold text-black'>Sub Category:</span> {sub_category}</p>
                        <p className='text-xl mb-3'><span className='text-xl font-bold text-black'>Category:</span> {category}</p>
                    </div>
                    <h3 className='text-xl mb-3'><span className='text-xl font-bold text-black'>Seller Name:</span> {seller_name}</h3>
                    <h3 className='text-xl mb-3'><span className='text-xl font-bold text-black'>Seller Email:</span> {seller_email}</h3>
                    <div className='flex justify-start mb-3'>
                        <span className='text-xl font-bold text-black mr-2'>Rating: {rating}</span>
                        <Rating
                            className='mt-[1px] text-xl'
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-primary'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                    <div className='flex gap-8'>
                        <p className='text-xl mb-3'><span className='text-xl font-bold text-black'>Available:</span> {available_quantity} pis</p>
                        <p className='text-xl mb-3'><span className='text-xl font-bold text-black'>Price:</span> {price}$</p>
                    </div>
                    <h1 className='text-xl mb-3'><span className='text-xl font-bold text-black'>Details of Product:</span> {product_details}</h1>
                </div>
            </div>
        </div>
    );
};

export default Details;
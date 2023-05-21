import React, { useContext } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useNavigate  } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const TabCart = ({ tab }) => {
    const { user } = useContext(AuthContext)
    const { rating, picture, price, name, _id } = tab;
    const navigate = useNavigate()

    const handleUser = () => {
        if (!user) {
            Swal.fire(
                'Login First',
                'You Have to Log in First To View Details',
                'question'
            )
            navigate('/login');
            return;
        }
    };

    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 h-full pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl w-full h-full object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p>Price: {price}$</p>
                    <Rating
                        className='mt-[1px] text-xl'
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-primary'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <div className="card-actions">
                        <Link onClick={handleUser} className='btn btn-outline btn-primary w-full'>Order Now</Link>
                        <Link onClick={handleUser} className="btn btn-primary w-full text-white" to={`/details/${_id}`}>View details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabCart;
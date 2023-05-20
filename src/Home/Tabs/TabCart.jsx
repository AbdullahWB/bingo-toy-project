import React from 'react';
import { Link } from 'react-router-dom';

const TabCart = ({ tab }) => {
    const {rating, picture, price, name, _id} = tab;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}$</p>
                    <div className="card-actions">
                        <Link to={`/details/${_id}`}><button className="btn btn-primary">View details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabCart;
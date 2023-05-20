import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllToyCard = ({allToy, index}) => {
    const { _id, name, price, category, picture, seller_email, seller_name, sub_category } = allToy || {};
    return (
        <>
         <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={picture} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{sub_category},{category}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {seller_email}
                    <br />
                    <span className="badge badge-ghost badge-sm">{seller_name}</span>
                </td>
                <td>{price}$</td>
                <th>
                   <Link to={`/details/${_id}`}> <span className='w-[40px] rounded-full h-[40px] flex justify-center items-center bg-[rgba(18,10,255,0.1)]'><FaFileAlt className='text-blue-500 text-2xl'></FaFileAlt></span></Link>
                </th>
            </tr>   
        </>
    );
};

export default AllToyCard;
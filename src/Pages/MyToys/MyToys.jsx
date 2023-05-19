import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ToyCard from './ToyCard';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.email);
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data);
            })
    },[user])
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>Product Information</th>
                            <th>Seller Information</th>
                            <th>Price</th>
                            <th>Details, Edit, Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map((myToy, index) => <ToyCard
                                key={myToy._id}
                                myToy={myToy}
                                index={index}
                            ></ToyCard>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
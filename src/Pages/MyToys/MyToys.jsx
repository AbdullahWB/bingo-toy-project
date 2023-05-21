import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ToyCard from './ToyCard';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';
import { toast } from 'react-hot-toast';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.email);
    const [myToys, setMyToys] = useState([])
    const [update, setUpdate] = useState(false)
    const [search, setSearch] = useState("")
    const [sortOrder, setSortOrder] = useState("asc")
    useTitle('My Toys')


    useEffect(() => {
        fetch(`https://bingo-toy-server.vercel.app/myToy/${user?.email}?sortOrder=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data);
            })
    }, [user, update, sortOrder]);

    const handleSort = () => {
        const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newSortOrder);
    };

    const handleDeleteToy = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bingo-toy-server.vercel.app/products/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== id);
                            setMyToys(remaining)
                        }
                    })
            }
        })
    }

    const handleSearch = () => {
        fetch(`https://bingo-toy-server.vercel.app/itemSearch/${search}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }

    const handleUpdateToyData = (data) => {
        fetch(`https://bingo-toy-server.vercel.app/updateToy/${data._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    toast.success('successfully Updated Data ✅')
                    setUpdate(!update)
                }
            })
    }


    return (
        <div className='max-w-7xl mx-auto mb-[130px]'>
            <div className='flex justify-between my-[50px] px-5 lg:px-0 gap-5'>
                <div>
                    <button onClick={handleSort} className='btn btn-primary text-white'>Sort by Price</button>
                </div>
                <div className="form-control">
                    <div className="input-group">
                        <input
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search…"
                            className="input input-bordered w-auto" />
                        <button onClick={handleSearch} className="btn btn-square btn-primary text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
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
                            <th>Available</th>
                            <th>Details, Edit, Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map((myToy, index) => <ToyCard
                                key={myToy._id}
                                myToy={myToy}
                                index={index}
                                handleUpdateToyData={handleUpdateToyData}
                                handleDeleteToy={handleDeleteToy}
                            ></ToyCard>)
                        }
                    </tbody>
                </table>
            </div>
            {/* <Modal></Modal> */}
        </div>
    );
};

export default MyToys;
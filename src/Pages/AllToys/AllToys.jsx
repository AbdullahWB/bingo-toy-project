import React, { useEffect, useState } from 'react';
import AllToyCard from './AllToyCard';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    const [search, setSearch] = useState("")



    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    

    const handleSearch = () => {
        fetch(`http://localhost:3000/itemSearch/${search}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }



    return (
        <div className='max-w-7xl mx-auto'>
        <div className="form-control my-[50px]">
            <div className="input-group">
                <input
                    type="text"
                    onChange={(e)=> setSearch(e.target.value)}
                    placeholder="Search…"
                    className="input input-bordered" />
                <button onClick={handleSearch} className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
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
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allToys.map((allToy, index) => <AllToyCard
                            key={allToy._id}
                            allToy={allToy}
                            index={index}
                        ></AllToyCard>)
                    }
                </tbody>
            </table>
        </div>
        {/* <Modal></Modal> */}
    </div>
    );
};

export default AllToys;
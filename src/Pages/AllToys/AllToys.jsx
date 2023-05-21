import React, { useEffect, useState } from 'react';
import AllToyCard from './AllToyCard';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(20)
    const [search, setSearch] = useState("")
    const { totalProducts } = useLoaderData();


    const totalPerPage = Math.ceil(totalProducts / itemsPerPage)

    const pageNumbers = [...Array(totalPerPage).keys()]

    // useEffect(() => {
    //     fetch('http://localhost:3000/products')
    //         .then(res => res.json())
    //         .then(data => setAllToys(data))
    // }, [])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/products?page=${currentPage}&limit=${itemsPerPage}`)
            const data = await response.json();
            setAllToys(data);
        }
        fetchData()
    }, [currentPage, itemsPerPage])

    const handleSearch = () => {
        fetch(`http://localhost:3000/itemSearch/${search}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }



    return (
        <div className='max-w-7xl mx-auto mt-[50px] mb-[130px]'>
            <div className="form-control my-[50px]">
                <div className="input-group flex justify-center items-center">
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search…"
                        className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square btn-primary text-white">
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
            <div className='mt-[50px]'>
                <div className="flex justify-center items-center">
                    {
                        pageNumbers.map(number => <button
                            key={number}
                            className={currentPage === number ? 'btn btn-active btn-primary text-white mx-1' : 'btn btn-outline btn-primary mx-1'
                            }
                            onClick={() => setCurrentPage(number)}
                        >
                            {number + 1}
                        </button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllToys;
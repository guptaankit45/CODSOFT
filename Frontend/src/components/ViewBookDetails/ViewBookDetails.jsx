import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { GrLanguage } from "react-icons/gr";

const ViewBookDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/v1/get-book-by-id/${id}`
                );
                setData(response.data.data);
                setLoading(false); // Set loading to false after fetching data
            } catch (err) {
                setError(err);
                setLoading(false); // Set loading to false if there's an error
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {data && (
                <div className='px-4 md:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row gap-8'>
                    <div className='bg-zinc-800 rounded p-4  h-[70vh] lg:h-[88vh] w-full lg:w-3/6 flex items-center justify-center'>
                        <img src={data.url} alt="/" className='h-[50vh] lg:h-[70vh] rounded' />
                    </div>
                    <div className='p-4 w-full lg:w-3/6'>
                        <h1 className='text-4xl font-semibold text-zinc-300'>{data.title}</h1>
                        <p className='mt-1 text-zinc-400'>{data.author}</p>
                        <p className='mt-4 text-zinc-500 text-xl'>{data.desc}</p>
                        <p className='flex mt-4 text-zinc-400 items-center justify-start text-xl'>
                            <GrLanguage className="me-3" /> {data.language}
                        </p>
                        <p className='mt-4 text-zinc-100 text-3xl fonr-semibold'>
                            Price: RS {data.price}
                        </p>
                    </div>
                </div>
            )}
            {!data && (
                <div className='h-screen bg-zinc-900 flex items-center justify-center'>
                    <Loader />
                </div>
            )}
        </>
    );
};

export default ViewBookDetails;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../BookCard/BookCard';

const Favourites = () => {
  const [favouriteBooks,setfavouriteBooks] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() =>{
    const fetch = async()=>{
      const response = await axios.get(
        "http://localhost:3000/api/v1/get-favourite-books",
        {headers}

      );
      setfavouriteBooks(response.data.data);
    };
    fetch();
  },[] );
  return (
    <div className='grid grid-cols-4 gap-4 '>
       {favouriteBooks &&
       favouriteBooks.map((items,i)=>(
        <div key={i}>
        <BookCard data={items}/>
        </div>
       )) }
    </div>
  )
}

export default Favourites;

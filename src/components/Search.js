import React from "react";
import { useState } from "react";
import '../styles/search.css';
import getImages from "../requests/getImages";

const Search = () => {
    const [value, setSearch] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        getImages(value);
    }

    return (
        <>
        <form className="search-form" onSubmit={handleSubmit}>
            <input className='search-input' type='text' onChange={(e) => setSearch(e.target.value)} />
            <button className='search-btn' type='submit'>Search</button>
        </form>
        </>
    );
};

export default Search;
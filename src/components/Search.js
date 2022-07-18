import React from "react";
import { useState } from "react";
import '../styles/search.css';
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
    const [value, setSearch] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(value));
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
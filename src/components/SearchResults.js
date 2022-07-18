import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ searchResults }) => {
    console.log(searchResults, "renders search results")
    if (!searchResults.length) {
        return <p className="no-results">Sorry, no results found. Try again. </p>
    } else {
    return (
        <>
        <div className="search-results">
            {searchResults.map((image) => {
                console.log(image, "image")
            return <img className="search-results__image"
                    src={image}
                    alt="spaceImage" />
            })}
        </div>
        </>
        );
    }
}


export default SearchResults;

SearchResults.propTypes = {
    searchResults: PropTypes.array.isRequired
}
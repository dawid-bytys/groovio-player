import React from "react";

import "./Search.scss";

const Search = props => {
    return (
        <div className="Search">
            <div className="Search__icon-container">
                <div className="Search__icon"></div>
            </div>
            <input
                type="text"
                onChange={e => props.passData(e.target.value)}
                className="Search__input"
                id="search-bar"
                placeholder="Type here to search"
            />
            <button className="Search__btn" id="search-bar-btn"></button>
        </div>
    );
};

export default Search;
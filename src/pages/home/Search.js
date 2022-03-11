import React, { useState } from 'react';

const Search = ({ search, setInput }) => {
    const inputHanndler = (e) => {
        setInput(e.target.value);
    }
    return (
        <div className="search">
            <input className="input" onChange={inputHanndler} type="text" />
            <button onClick={search}>Search</button>
        </div>
    );
};

export default Search;
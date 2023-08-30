import React from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './style.css';
 
const SearchInput = ({ searchData, searchHandle }) => {
    return (
        <div className="search-flex">
            <SearchRoundedIcon />
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchData} 
                onChange={(e) => searchHandle(e)} 
            />
        </div>
    );
}
 
export default SearchInput;
import React from 'react';
import {CgProfile} from 'react-icons/cg';
import {FaSearch,FaAngleDown} from 'react-icons/fa';
import './style.css';

function Header(props) {

    let isSearchBox = false;
    isSearchBox = props.isSearchBox ? props.isSearchBox : false;

    return (
        <div className='header'>
            {
                isSearchBox
                ? <div className='search-box'>
                    <FaSearch />
                    <input type="text" 
                        autoComplete='off'
                        name='search' 
                        placeholder='search'
                    ></input>
                </div>
                : ''
            }
            <div className='profiler'>
                <div>
                    <CgProfile />
                    Admin
                </div>
                <FaAngleDown />
            </div>
        </div>
    )
}

export default Header
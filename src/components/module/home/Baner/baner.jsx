import React, { useState } from 'react'
import daun from '../../../../assets/home/Daun.svg';

import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./baner.css"
import { useNavigate, useSearchParams } from 'react-router-dom';


function Baner() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState([]);
    const handleSearch = () => {
        navigate({
        pathname: "/search",
        search: `?search=${search}`,
      });
    };



  return (
        <div className="container containers">
            <div className="d-flex align-items-center baner">
                <div className=" mb-5 justify-content-evenly">
                    <div className="title">
                        <h1>Discover Recipe & Delicious Food</h1>
                        <div className="conts-icon" >
                            <a onClick={handleSearch}>
                                <FontAwesomeIcon icon={faMagnifyingGlass } className="icon-search" />
                            </a>
                            <input
                                type="text"
                                name="search"
                                className="form-control mb-3"
                                placeholder="Search Recipe"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xs-12 ">
                    <div  div className="container_img">
                        <img src={daun} alt="" width=""/>
                    </div>
                </div>
            </div>
        </div>
        
 
  )
}

export default Baner

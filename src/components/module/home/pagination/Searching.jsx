import React, { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import "./search.css"
import banana_pop from '../../../../assets/home/banana_pop.svg';
import Footer from "../footer/FooterTopandBottom"
import { Dropdown } from "react-bootstrap";
import axios from "axios"
import CardSearch from '../../../base/Card/CardSearch'
import { useDispatch } from 'react-redux';



function Searching() {
  const [searchParams, setSearchParams] = useSearchParams();
 
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
 
  const handleSort = (e) => {
    setSort(e.currentTarget.value);
  };
 
  function fecth() {
    axios
    .get("http://localhost:8080/api/v1" + "/recipe?search=" + search + "&sortby=title&sortBy=" + sort + "&page=1&limit=24")
    .then((response) => {
        setRecipes(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
 
  const handleSearch = (e) => {
    e.preventDefault();
    fecth();
    if (search !== "" && sort !== "") {
        setSearchParams({
          keyword: search,
          sort: sort,
        });
      } else if (search !== "") {
        setSearchParams({
          keyword: search,
        });
      } else if (sort !== "") {
        setSearchParams({
          sort: sort,
        });
      } else {
        setSearchParams({});
      }
  };
 
//   console.log(search)
//   console.log(sort)
// function getData() {
//   const searching = searchParams.get("search") === null ? "" : searchParams.get("search");
//   axios
//   .get(
//     `http://localhost:8080/api/v1/recipe?search=${searching}&sort=${sort}`
//   )
//   .then((response) => {
//       setRecipes(response.data.data);
//       console.log(response.data.data);
//     })
//   .catch((error) => {
//     console.log(error);
//   });
// }
  useEffect(() => {
    fecth()
    // getData()
    // setSearch(searchParams.get("search"))
    // searchParams.get("search")
    // searchParams.get("sort")
  }, [searchParams, sort])


  return (
    <>
        <div className="container">
          <nav className="navbar bg-tranparent mt-3">
            <div className="container d-flex ">
              <Link to="/home" className='a-search'>
                <p className="navbar-brand a-search ">Food Recipe</p>
              </Link>
              <div className="d-flex search-container ">
                <form className="d-flex form-search" role="search"
                onSubmit={handleSearch}
                >
                <input type="text" name="search" 
                placeholder="search" 
                className="form-control input-search " 
                onChange={(e) => setSearch(e.target.value)} />
                <button type='submit' className="btn btn-warning btn-custom" >search</button>

                </form>
              </div>
            </div>
            
          </nav>
          <div className='my-5'>
            <Dropdown>
              <Dropdown.Toggle className='btn-yellow yellow ms-3' variant = "warning" 
              id="dropdown-basic"
              >
                Sorting Name
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <button className="ms-3 btn btn-white text-warning me-3" value="ASC" onClick={handleSort}>
                    Name Z-A
                  </button>
                </Dropdown.Item>
                <div class="dropdown-divider"></div>
                <Dropdown.Item>
                  <button className="ms-3 btn btn-white text-warning" value="DESC" onClick={handleSort} >
                    Name A-Z
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
          <div className="container justify-content-center my-5">
              <div className="row row-cols-sm-2 row-cols-md-3 g-4 ">

            {recipes.length > 0 ? (
              recipes.map((item) => [
                
                <div className="col" key={item.id}>   
                  <CardSearch
                    src={item.thumbnail}
                    titleName={item.title}
                    to={`/detailRecipe/${item.id}`}

                  />
                </div>
              ])
            ) : (
              <div className="text-center m-auto  beban ">
                <h2>Sorry... Data yang anda cari tidak ada</h2>
              </div>
              
            )}
               
              </div>
          </div>
          <div className="d-flex flex-row my-5 justify-content-evenly">
            <button className="btn yellow btn-nav ">
              <span>&larr;</span>
            </button>
            <p>
              {/* {pagination.currentPage}/{pagination.totalPage} */}
              1/1
            </p>
            <button className="btn yellow btn-nav" >
              &rarr;
            </button>
          </div>
        </div>
          <Footer/>
    </>
    

  )
}

export default Searching
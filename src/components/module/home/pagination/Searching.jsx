import React, { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import "./search.css"
import banana_pop from '../../../../assets/home/banana_pop.svg';
import Footer from "../footer/FooterTopandBottom"
import { Dropdown } from "react-bootstrap";
import axios from "axios"
import Card from '../../../base/Card/Card';
import { useDispatch } from 'react-redux';



function Searching() {
  const [searchParams1, setSearchParams1] = useSearchParams();
 
  const [sort1, setSort1] = useState("");
  const [search1, setSearch1] = useState("");
  const [recipes, setRecipes] = useState([]);
 
  const handleSort1 = (e) => {
    setSort1(e.currentTarget.value);
  };
 
  function fecth() {
    // `http://localhost:8080/api/v1/recipe?search=${searching}&sortBy=${sortBy}`
    axios
    .get('http://localhost:8080/api/v1/' + "recipe?search=" + search1 + "&sortby=title&sortBy=" + sort1 + "&page=1&limit=24")
    .then((response) => {
        setRecipes(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
 
  const handleSearch1 = (e) => {
    e.preventDefault();
    fecth();
    if (search1 !== "" && sort1 !== "") {
        setSearchParams1({
          keyword: search1,
          sort: sort1,
        });
      } else if (search1 !== "") {
        setSearchParams1({
          keyword: search1,
        });
      } else if (sort1 !== "") {
        setSearchParams1({
          sort: sort1,
        });
      } else {
        setSearchParams1({});
      }
  };
 
//   console.log(search)
//   console.log(sort)
 
  useEffect(() => {
    fecth()
  }, [searchParams1, sort1])





  // const navigate = useNavigate();
  // const [show, setShow] = useState(false);
  // // const handleHide = () => setShow(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [sortBy, setSortBy] = useState("");
  // const [search, setSearch] = useState("");
  // // const [recipes, setRecipes] = useState([]);
  // const dispatch = useDispatch()
  // // const handleSort = (e) => {
  // //   // getData()
  // //   setSortBy(e.currentTarget.value);
  // //   // setSearchParams({search, sortBy})
  // // };
  // // const searh = (e) =>{
  // //   setSearch(e.currentTarget.value)
  // // }
  // // const handleSearch = () => {
  // //   searh()
  // //   getData()
  // //   // setSearchParams({search, sortBy})
  // //   navigate({
  // //     pathname: "/sort",
  // //     sort: `?sortBy=${sortBy}`,
  // //   });
  // // };
 
  // const getData =  async() => {
  //   const searching = searchParams.get("search") === null ? "" : searchParams.get("search");
  //   const result = await axios
  //   .get(
  //     `http://localhost:8080/api/v1/recipe?search=${searching}&sortBy=${sort1}`
  //   )
  //   .then((response) => {
  //       setRecipes(response.data.data);
  //       console.log(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //     console.log(result.data.data)
  //     // dispatch(setRecipes(result.data.data))
  // }
  // useEffect(() => {
  //   getData()
  //   setSearch(searchParams.get("search"))
  //   searchParams.get("search")
  //   searchParams.get("sortBy")
  // }, [searchParams1, sortBy  ])
 


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
                onSubmit={handleSearch1}
                >
                {/* <select onChange={handleSort}>
                  <option value="">Pilih Option</option>
                  <option value="ASC">A-Z</option>
                  <option value="DESC">Z-A</option>
                </select> */}
                <input type="text" name="search" 
                placeholder="search" 
                className="form-control input-search " 
                onChange={(e) => setSearch1(e.target.value)} />
                <button type='submit' className="btn btn-warning btn-custom" >search</button>

                  {/* <input className="form-control input-search " 
                  type="search" placeholder="Search" aria-label="Search"
                  onChange={searh}
                  /> */}
                  {/* <button 
                  className="btn btn-warning btn-custom" 
                  type="submit"
                  onClick={handleSearch}
                  >Search</button> */}
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
                  <button className="ms-3 btn btn-white text-warning me-3" value="ASC" onClick={handleSort1}>
                    Name Z-A
                  </button>
                </Dropdown.Item>
                <div class="dropdown-divider"></div>
                <Dropdown.Item>
                  <button className="ms-3 btn btn-white text-warning" value="DESC" onClick={handleSort1} >
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
                  <Card
                    src={item.thumbnail}
                    titleName={item.title}
                  />
                </div>
              ])
            ) : (
              <div className="text-center m-auto  beban ">
                <h2>Sorry... Data yang anda cari tidak ada</h2>
              </div>
              
            )}
                    {/* 
                      <img src={banana_pop} alt=""  />
                      <img src={banana_pop} alt=""  />
                      <img src={banana_pop} alt=""  />
                      <img src={banana_pop} alt=""  /> 
                    */}
              </div>
          </div>
          <div className="d-flex flex-row my-5 justify-content-evenly">
            <button className="btn yellow btn-nav ">
              <span>&larr;</span>
            </button>
            <p>
              {/* {pagination.currentPage}/{pagination.totalPage} */}
              1/2
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
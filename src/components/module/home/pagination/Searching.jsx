import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import "./search.css";
import banana_pop from '../../../../assets/home/banana_pop.svg';
import Footer from "../footer/FooterTopandBottom"
import { Dropdown } from "react-bootstrap";
import axios from "axios"
import CardSearch from '../../../base/Card/CardSearch'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getRecipeActionCreator } from '../../../../redux/action/creator/recipe';
import { useDidUpdate } from '../../../../custom-hooks/common';
import { toast } from "react-toastify";




function Searching() {
  const [searchParams, setSearchParams] = useSearchParams()
  const paramsToObject = (entries) => {
    const result = {}
    for (const [key, value] of entries) {
      result[key] = value;
    }
    return result
  }

  const [recipes, setRecipes] = useState([])
  const dispatch = useDispatch()
  const getAll = useSelector(state => state.recipe.get, shallowEqual)
  const entries = searchParams.entries()
  const objectParams = paramsToObject(entries)
  const isMounted = useRef()
  const toastId = React.useRef(null);

  useEffect(() => {
    if (!isMounted.current) {
      if (objectParams) {
        dispatch(getRecipeActionCreator({
          ...objectParams,
          limit: 10
        }))
      } else {
        dispatch(getRecipeActionCreator())
      }
      isMounted.current = true
    } else {
      dispatch(getRecipeActionCreator({
        ...objectParams,
        limit: 10
      }))
    }
  }, [searchParams])

  useDidUpdate(() => {
    const toastOptions = {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    if (getAll?.isFulfilled) {
      toast.dismiss();
      setRecipes(getAll)
    }
    if(getAll?.isPending){
      toast.dismiss();

      toastId.current = toast.loading("Loading...", toastOptions);
    }
    
  }, [getAll])


  return (
    <div className="bg-body">
        <nav className="ps-5 navbar bg-navbar">
            <Link to="/home" className='a-search'>
              <p className="navbar-brand a-search ">Food Recipe</p>
            </Link>
          <div className="container d-flex justify-content-center w-100">
            <div className="d-flex search-container w-100 m-1">
              <form className="d-flex form-search" role="search"

              >
                <input type="text" name="search"
                  placeholder="search"
                  className="form-control input-search"
                />
                <button type='submit' className="btn btn-warning btn-custom" >search</button>

              </form>
            </div>
          </div>

        </nav>
      <div className="container ">
        <div className='my-5'>
          <Dropdown>
            <Dropdown.Toggle className='btn-yellow yellow ms-3' variant="warning"
              id="dropdown-basic"
            >
              Sorting Name
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <button className="ms-3 btn btn-white text-warning me-3" onClick={() => {
                  setSearchParams({
                    ...objectParams,
                    sortBy: "asc"
                  })
                }}>
                  Name Z-A
                </button>
              </Dropdown.Item>
              <div class="dropdown-divider"></div>
              <Dropdown.Item>
                <button className="ms-3 btn btn-white text-warning" onClick={() => {
                  setSearchParams({
                    ...objectParams,
                    sortBy: "desc"
                  })
                }}>
                  Name A-Z
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="container justify-content-center my-2 ">
          <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-3 ">

            {recipes?.response?.length > 0 ? (
              recipes?.response?.map((item) => [

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

          
          <button className="btn yellow btn-nav "
          onClick={() => {
            if(Boolean(recipes?.pagination?.page?.previous)){
              setSearchParams({
                ...objectParams,
                page: recipes?.pagination?.page?.previous
              })
            }else{
              return;
            }
          }}
          // disabled={Boolean(recipes?.pagination?.page?.previous)}
          >
            <span>&larr;</span>
          </button>
          <p>
            {/* {pagination.currentPage}/{pagination.totalPage} */}
            {recipes?.pagination?.page?.current}/{recipes?.pagination?.total?.sheet === 0 ? 1 : Number(recipes?.pagination?.total?.sheet) }
          </p>
         
           <button className="btn yellow btn-nav" 
          onClick={() => {
            if(Boolean(recipes?.pagination?.page?.next)){
              setSearchParams({
                ...objectParams,
                page: recipes?.pagination?.page?.next 
              })
            }else{
              return;
            }
          }}
          // disabled={Boolean(recipes?.pagination?.page?.next)}
          >
            &rarr;
          </button> 
          
        </div>
      </div>
      <Footer />
    </div>


  )
}

export default Searching
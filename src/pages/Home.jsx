import React, { useEffect, useState } from 'react'
import Card from '../components/base/Card/Card';
import Baner from '../components/module/home/Baner/baner'
import Footer from '../components/module/home/footer/FooterTopandBottom'
import Navbar from '../components/module/home/navbar/Navbar'
import NewRecipe from '../components/module/home/NewRecipe/NewRecipe'
import Popular from '../components/module/home/popular/Popular';
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import '../components/module/home/home.css'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useDidUpdate } from '../custom-hooks/common';
import { getRecipeActionCreator } from '../redux/action/creator/recipe';

const Home = () => {
    const [recipes, setRecipes] = useState([])
    const dispatch = useDispatch()
    const getAll = useSelector(state => state.recipe.get, shallowEqual)

    useEffect(() =>{
        dispatch(getRecipeActionCreator({
            limit: 10
        }))
    }, [])

    useDidUpdate(() =>{
        if(getAll?.isFulfilled){
            setRecipes(getAll?.response)
        }
    }, [getAll])
    
    return (
        <div className='body'>
        <div className="container-fluid custom">
            <Navbar />
            <Baner />
            <Popular />
            <NewRecipe />    
                <div className="container popular-recipe ">
                    <div className="col-sm-3 popular ">
                        <p>Popular Recipe</p>
                    </div>
                    <div className="row mt-5">
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 m-5'>
                            {recipes.map((item) =>(
                            <div className="m-4 col" key={item.id}>
                                <Card 
                                src={item.thumbnail}
                                to={`/detailRecipe/${item.id}`}
                                titleName= {item.title}
                                />
                            </div>
                            ))
                            }  
                        </div>
                    </div>
                </div>
        </div>    
        <Footer />
    </div>
      )
}

export default Home
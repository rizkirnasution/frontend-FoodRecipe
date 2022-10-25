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
import NavbarAfterLogin from '../components/module/home/navbar/NavbarAfterLogin';
import { toast } from "react-toastify";



const Home = () => {
    // const logout = useSelector(state => state.auth.logout, shallowEqual)
    // const login = useSelector((state) => state.auth.login);
    const token = localStorage.getItem("@acc_token")
    const [recipes, setRecipes] = useState([])
    const [popular, setPopular] = useState([])
    const dispatch = useDispatch()
    const getAll = useSelector(state => state.recipe.get, shallowEqual)
    console.log(popular)
    useEffect(() =>{
        if(popular === false){
            dispatch(getRecipeActionCreator({
                limit: 10
            }))
        }else{
            dispatch(getRecipeActionCreator({
                limit: 2
            }))
            
        }
        dispatch(getRecipeActionCreator({
            limit: 10
        }))
    }, [])

    const toastId = React.useRef(null);
    useDidUpdate(() =>{

        if(getAll?.isFulfilled){
            setRecipes(getAll?.response)
            setPopular(getAll?.response)
        }
        
    }, [getAll])
    
    return (
        <div className='body'>
        <div className="container-fluid custom">
            {token == null ?
            <Navbar /> :
            <NavbarAfterLogin/> 
        }
            <Baner />
            <Popular src={popular.thumbnail}/>
            <NewRecipe />    
                <div className="container popular-recipe ">
                    <div className="col-sm-3 popular ">
                        <p>Popular Recipe</p>
                    </div>
                    <div className="row ">
                        <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 ms-0 pb-5 g-2 gb-5 popular-custom'>
                            {recipes.map((item) =>(
                            <div className="mb-0 col" key={item.id}>
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
import React, { useEffect, useRef, useState } from 'react'
import Card from '../components/base/Card/Card'
import Baner from '../components/module/home/Baner/baner'
import Footer from '../components/module/home/footer/FooterTopandBottom'
import Navbar from '../components/module/home/navbar/Navbar'
import NewRecipe from '../components/module/home/NewRecipe/NewRecipe'
import Popular from '../components/module/home/popular/Popular';
import chiken_kare from '../assets/home/chiken_kare.svg';
import banana_pop from '../assets/home/banana_pop.svg';
import bomb_chiken from '../assets/home/bomb_chiken.svg';
import coffe_lava from '../assets/home/coffe_lava.svg';
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import '../components/module/home/home.css'
import axios from "axios"
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
// import { getRecipes }  from '../utils/http'
import { useDidUpdate } from '../custom-hooks/common'
import { decode } from 'html-entities'
// import { getRecipeActionCreator } from '../redux/action/creator/recipe'




const Home = () => {
    
    const dataLimit = 8
    const [recipes, setRecipes] = useState([])
    const [recipesTitle, setRecipesTitle] = useState({})

    const dispatch = useDispatch()
    const mounted = useRef()
    // const { getRecipes, postRecipe, putRecipe, deleteRecipe } = useSelector(state => ({
    //     getProduct: state.product.get,
    // }), shallowEqual)
    // const { getCategory } = useSelector(state => ({
    //     getCategory: state.category.get
    // }), shallowEqual)
    
    // const isPostRecipesFulfilled = postRecipe?.isFulfilled;
    // const isPutRecipesFulfilled = putRecipe?.isFulfilled;
    // const isDeleteRecipesFulfilled = deleteRecipe?.isFulfilled;

    // const [searchParams] = useSearchParams()
    // const params = Object.fromEntries([...searchParams])
    // const navigation = useNavigate()
    // const onChangePage = (value) => {
    //     dispatch(getRecipeActionCreator({
    //         limit: params?.limit || dataLimit,
    //         page: value
    //     }))
    //     navigation(`?page=${value}&limit=${params?.limit || dataLimit}`)
    // }

    // useEffect(() => {
    //     if (!mounted.current) {
    //         dispatch(getRecipeActionCreator({ limit: params?.limit || dataLimit, page: params?.page || 1 }))
    //         // dispatch(getCategoryActionCreator())
    //         // dispatch(getUserActionCreator())
    //         mounted.current = true
    //     } else {
    //         if (getRecipes.response) {
    //             setRecipes(getRecipes?.response.map(value => ({
    //                 ...value,
    //                 name: decode(value.name),
    //                 description: decode(value.description)
    //             })))
    //         }

    //         // if (getCategory.response) {
    //         //     setCategoryInfo(getCategory?.response.map(value => ({
    //         //         id: value.id,
    //         //         name: decode(value.name)
    //         //     })))
    //         // }

    //         // if (getUser.response) {
    //         //     setSellerInfo(getUser?.response.map(value => ({
    //         //         id: value.id,
    //         //         name: decode(value.name)
    //         //     })))
    //         // }
    //     }
    // }, [
    //     getRecipes,
    //     // getCategory,
    //     // getUser
    // ])
    // console.log(recipes)
    // useDidUpdate(() => {
    //     if (
    //         isPostRecipesFulfilled ||
    //         isPutRecipesFulfilled ||
    //         isDeleteRecipesFulfilled
    //     ) {
    //         // dispatch(getRecipeActionCreator({ limit: params?.limit || dataLimit, page: params?.page || 1 }))
            
    //     }
    // }, [
    //     isPostRecipesFulfilled,
    //     isPutRecipesFulfilled,
    //     isDeleteRecipesFulfilled
    // ])

    const fetch  = async() =>{
        const response = await axios.get(`http://localhost:8080/api/v1/recipe`)
        .catch(err => console.log(err))

        
        dispatch(setRecipes(response.data.data))
        // return 
    }
    console.log(recipes)
    useEffect(() =>{
        fetch()
    }, [])
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
                            <div className='row row-cols-3 row-cols-sm-3 row-cols-md-4 g-3'>
                                {recipes.map((item) =>(
                                <div className="col" key={item.id}>
                                    <Card 
                                    src={item.thumbnail}
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
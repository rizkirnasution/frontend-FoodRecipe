import React, { useEffect, useRef, useState } from 'react'
import Card from '../components/base/Card/Card';
import Baner from '../components/module/home/Baner/baner'
import Footer from '../components/module/home/footer/FooterTopandBottom'
import Navbar from '../components/module/home/navbar/Navbar'
import NewRecipe from '../components/module/home/NewRecipe/NewRecipe'
import Popular from '../components/module/home/popular/Popular';
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import '../components/module/home/home.css'
import axios from "axios"
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


const Home = () => {

    // const dataLimit = 8
    // const [Recipes, setRecipes] = useState([])
 
    // const dispatch = useDispatch()
    // const mounted = useRef()
    // const { getRecipes,  } = useSelector(state => ({
    //     getRecipes: state.Recipes.get;
    // }), shallowEqualRedux)
    // const isPostRecipesFulfilled = postRecipes?.isFulfilled
    // const isPutRecipesFulfilled = putRecipes?.isFulfilled
    // const isDeleteRecipesFulfilled = deleteRecipes?.isFulfilled
    // const { getCategory } = useSelector(state => ({
    //     getCategory: state.category.get
    // }), shallowEqualRedux)
    // const { getUser } = useSelector(state => ({
    //     getUser: state.user.get
    // }), shallowEqualRedux)
    // const [searchParams] = useSearchParams()
    // const params = Object.fromEntries([...searchParams])
    // const navigation = useNavigate()
    // const onChangePage = (value) => {
    //     dispatch(getRecipesActionCreator({
    //         limit: params?.limit || dataLimit,
    //         page: value
    //     }))
    //     navigation(`?page=${value}&limit=${params?.limit || dataLimit}`)
    // }
    // useEffect(() => {
    //     if (!mounted.current) {
    //         dispatch(getRecipesActionCreator({ limit: params?.limit || dataLimit, page: params?.page || 1 }))
    //         dispatch(getCategoryActionCreator())
    //         dispatch(getUserActionCreator())
    //         mounted.current = true
    //     } else {
    //         if (getRecipes.response) {
    //             setRecipes(getRecipes?.response.map(value => ({
    //                 ...value,
    //                 name: decode(value.name),
    //                 description: decode(value.description)
    //             })))
    //         }
    //     }
    // }, [
    //     getRecipes,
    // ])

    // useDidUpdate(() => {
    //     if (
    //         getRecipes
    //     ) {
    //         dispatch(getRecipesActionCreator({ limit: params?.limit || dataLimit, page: params?.page || 1 }))
    //         setShowDialog(true)
    //     }
    // }, [])


    const [recipes, setRecipes] = useState([])
    const dispatch = useDispatch()

    const fetch  = async() =>{
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/recipe`)
        .catch(err => console.log(err))

        dispatch(setRecipes(response.data.data))
        console.log(response.data.data)
        // return 
    }
    
    useEffect(() =>{
        fetch()
    }, [])
    console.log(recipes)

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
                        <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-3 none'>
                            {recipes.map((item) =>(
                            <div className="col" key={item.id}>
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
import React, { useEffect, useRef, useState } from 'react'
import Card from '../components/base/Card/Card'
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
    const [recipes, setRecipes] = useState([])
    const dispatch = useDispatch()

    const fetch  = async() =>{
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/recipe`)
        .catch(err => console.log(err))

        dispatch(setRecipes(response.data.data))
        console.log(response.data)
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
                            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-3'>
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
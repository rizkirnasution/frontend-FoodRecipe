import React from 'react'
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


const data = [
    {
        id: 1,
        src: coffe_lava,
        title: "coffe",
    },
    {
        id: 2,
        src: bomb_chiken,
        title: "coffe",
    },
    {
        id: 3,
        src: chiken_kare,
        title: "coffe",
    },
    {
        id: 4,
        src: chiken_kare,
        title: "coffe",
    },
    {
        id: 5,
        src: chiken_kare,
        title: "coffe",
    },
    
]
function Home() {
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
                                {data.map((item)=>(
                                <div className="col" key={item.id}>
                                    <Card 
                                    src={item.src}
                                    titleName={item.title}
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
import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer(){
    return(
        <div className="footer">
            <footer className="ff-airbnb">
                    <div className="bottom">
                        <ul className="m-0 p-0">
                        <li>
                            <Link className="color-blue" to="/#">
                            Product
                            </Link>
                        </li>
                        <li>
                            <Link className="color-blue" to="/#">
                            Company
                            </Link>
                        </li>
                        <li>
                            <Link className="color-blue" to="/#">
                            Learn More
                            </Link>
                        </li>
                        <li>
                            <Link className="color-blue" to="/#">
                            Get In Touch
                            </Link>
                        </li>
                        </ul>
                    </div>
                </footer>
        </div>
   
  );
}

export default Footer;
import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer(){
    return(
        <div className="footer sticky-footer">
                 <footer className="ff-airbnb">
                    <div className="bottom">
                        <ul className="m-0 p-0">
                        <li>
                            <Link className="" to="/#">
                            Product
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/#">
                            Company
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/#">
                            Learn More
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/#">
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
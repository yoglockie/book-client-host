import React from 'react'
import {BiLogoFacebook as Facebook,
    BiLogoInstagram as Instagram,
    BiLogoYoutube as Youtube,
    BiLogoTwitter as Twitter} from 'react-icons/bi';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="row">
                        <a href="#"><Facebook/></a>
                        <a href="#"><Instagram/></a>
                        <a href="#"><Youtube/></a>
                        <a href="#"><Twitter/></a>
                    </div>

                    <div className="row">
                        <ul>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>

                    <div className="row">
                        BOOKSHOP Copyright © 2023 Bookshop - All rights reserved || Designed By: Lokesh
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

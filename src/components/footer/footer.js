import React from 'react';
import "./footer.css";
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';

function Footer(){
    return(
        <div className="clear_float background_232323 padding_extreme">
            <div className="uk-align-center">
                
                <div className="uk-text-center uk-width-1-4 float_left">
                    <a href="https://www.facebook.com/" target="_blank"><FaFacebook/></a>
                </div>
                <div className="uk-text-center uk-width-1-4 float_left">
                    <a href="https://twitter.com/login?lang=en-gb" target="_blank"><FaTwitter/></a>
                </div>
                <div className="uk-text-center uk-width-1-4 float_left">
                    <a href="https://telegram.org/" target="_blank"><FaTelegram/></a>
                </div>
                <div className="uk-text-center uk-width-1-4 float_left">
                    <a href="https://telegram.org/" target="_blank"><FaLinkedin/></a>
                </div>
                <div className="uk-width-1-1">.</div>
                <div className="uk-text-center uk-width-1-4 float_left">
                    <a href="">Blog</a>
                </div>
                <div className="uk-text-center uk-width-1-4 float_left">
                    <a>CRY Child Protection Policy</a>
                </div>
                <div className="uk-text-center uk-width-1-4 float_left">
                    <a>CRY Child Protection Policy</a>
                </div>
                <div className="font_white uk-text-center uk-width-1-4 float_left">
                    <a>Contact Us</a>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;
import React from 'react';
import './header.css';

function Header(){
    return(
        <div>
                <div className="uk-width-1-1">
                    <ul className="ul uk-margin-xlarge-left">
                        <li><a className="li_a" href="#home">Home</a></li>
                        <li><a className="li_a active" href="#news">Why Children?</a></li>
                        <li><a className="li_a" href="#contact">About Cry</a></li>
                        <li><a className="li_a" href="#home">Our Approach</a></li>
                        <li><a className="li_a" href="#news">Our Impact</a></li>
                        <li><a className="li_a" href="#contact">Corporate Partners</a></li>
                        <li><a className="li_a" href="#contact">Volunteering and intership</a></li>
                        <li class="float_right"><a className="li_button li_a"><div>Donate Now</div></a></li>
                    </ul>
                </div>
        </div>
    );
}

export default Header;
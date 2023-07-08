import React from 'react';
import twitter from './assets/twitter-sign.png';
import instagram from './assets/instagram-symbol.png'
import facebook from './assets/facebook.png';


export default function Footer() {
  return (
    <div className='footer'>
        <div className="socialLinks">
        <input type='email' placeholder="sign up for a newsletter"></input>
            <ul className='nav'>
                <li><img src={twitter} alt="twitter" height="28px"/></li>
                <li><img src={instagram} alt="instagram" height="28px"/></li>
                <li><img src={facebook} alt="facebook" height="28px"/></li>
            </ul>
        </div>
    </div>
  )
}

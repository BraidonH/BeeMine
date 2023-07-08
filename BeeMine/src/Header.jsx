import React from 'react';
import swarm from './assets/swarm.png';
import menu from './assets/menu.png';
import profile from './assets/profile-user.png';
import honeycomb from './assets/honeycomb.png';
import news from './assets/news.png';
import close from './assets/close.png';
import exit from './assets/logout.png';
import message from './assets/email.png';
import { useState } from 'react';

export default function Header() {
    const [display, setDisplay] = useState(false)
  return (
    <div className='header'>
        <div className="fixed">
        <div>        
            <h1 className="title">Bee<sup><img class="swarm" src={swarm} width="50px"/></sup>Mine</h1>
        </div>
        </div>
        {/* <input className='search' placeholder='search'></input> */}
        <div>
            {display ?
            <div>
            <ul className='fixedNav'>
                <nav>
                <li><img src={profile} alt="profile" height="25px"/></li>
                <li><img src={honeycomb} alt="profile" height="25px"/></li>
                <li><img src={message} alt="profile" height="25px"/></li>
                <li><img src={news} alt="profile" height="25px"/></li>
                <sup className="hamburger"><img src={exit} height="18px" onClick={() => setDisplay(!display)}></img></sup>
                </nav>
            </ul> 
                </div>
                : 
                <div className='fixedHam'>
                <img className="hamburger" onClick={() => setDisplay(!display)} src={menu} height="40px"></img>
                </div>
                }
    </div>
    </div>
  )
}

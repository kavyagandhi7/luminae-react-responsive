import React, { useState } from 'react'
import { LeftSide, Logo, Mencosmetic, RigthSide } from '../Asset'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";
import { HiBars3 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import "../css/Header.css"
import ExplorAll from './ExplorAll';
import Explor from './Explor';
const Header = () => {
    const screenWidth = window.innerWidth;
    const [toggel, settoggel] = useState(false)

  return (
    <>
    <div className='mainHeader'>
    
        <div className="logo">
        <div id="icontoggel" onClick={() => settoggel(!toggel)}>
                        {
                            !toggel ? <HiBars3 /> : <CgClose />
                        }
                    </div>
            <img src={Logo} alt="Logo" />
            <div id="icontoggels">
            <div className="iconSIgn"><CgShoppingBag/></div>
            <div className='rouder ' style={{fontSize:"18px"}}>3</div>
                </div> 
        </div>
        <div className="searchBar">
          <div className='searchBarInner'>
          <input type="text" className='serchInput' placeholder='Serach Products' />
            <select className='selector'>
                <option value="1">All Cetegories</option>
                <option value="2">Women</option>
                <option value="3">Men</option>
            </select>    
            <span className='sreachSpan'></span>
            <LuSearch className='seachIcon'></LuSearch>
          </div>
        </div>
        <div className="pages">
            <div className="namePage">About us</div>
            <div className="namePage">Blog</div>
            <div className="namePage">Contact us</div>
            <div className="namePage">Help & support</div>
        </div>
        <div className="iconpages">
            <RiInstagramFill/>
            <FaFacebookF/>
            <FaTelegramPlane/>
        </div>
       
    </div>
    <div className="mainSecondHeader">
            <div className="Category">
                <h2>
                    Categories
                </h2>
                <select className='sigininput' >
                <option value="1" >USD</option>
                <option value="2">MRP</option>
                <option value="3">DOLLOR</option>
                    </select>
                <select className='sigininput'>
                <option value="1" >English</option>
                <option value="2">Hindi</option>
                <option value="3">Beritish</option>
                </select>
            </div>
            <span className='Sspan'></span>
            <div className="adspage">
                <img src={Mencosmetic} alt="ads" />
                <div>
                    <div>Weekly Men's Toiletries Coupons.</div>
                    <p> We extend exclusive discounts to our male clintele</p>
                </div>
            </div>
            <span className='Sspan'></span>
            <div className="signin">
                <div className="singincart">
                    <div className="iconSIgn"><FaRegUser/></div>
                    <div>Sign in</div>
                </div>
                <div className="singincart">
                <div className="iconSIgn"><CiHeart/></div>
                    <div>Favorites</div>
                </div>
                <div className="singincart">
                <div className="iconSIgn"><CgShoppingBag/></div>
                    <div>Cart</div>
                    <div className='rouder'>3</div>
                </div>
            </div>

        </div>
        <div className="mainlastDIV">
            <div className="allCategry">
                <p>Women</p>
                <p>Male</p>
                <p>Mother-Child</p>
                <p>Home & Furniture</p>
                <p>Super market</p>
                <p>cosmetics</p>
                <p>Shope & Bag</p>
                <p>Electronic</p>
                <p>Sport & Outdoor</p>
                <p>Bestseller</p>
            </div>
        </div>
        {/* {screenWidth <= 720 ? ( */}
        <div className='moabilsceen'>

       <Explor />
        </div>
        
        {/* ) : ( "" )} */}
    </>
  )
}

export default Header
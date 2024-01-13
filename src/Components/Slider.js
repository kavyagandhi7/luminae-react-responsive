import React from 'react'
import { SliderImg } from '../Asset'
import { CiShoppingBasket } from "react-icons/ci";
import "../css/Slider.css"

const Slider = () => {
  return (
    <>
    <div className="mainSlider">
        <div className="imgSLIDER">
            <img src={SliderImg} alt="slider"   />
        </div>
        <div className="PopupSlider">
            <div className="top">
                <h2>Summer Essentials <br /> <span>20% off</span> </h2> 
            </div>
            <div className="bottom">
                19 Jul-30 Jul
            </div>
        </div>
        <div className="detailSlider">
            <div className="name">
                KIMONS, CAFTANS & PAREOS
            </div>
            <div className="PRICE">
                Poolside glam included From &4.99
            </div>
            <div className="button">
                <p className='iconDetail'><CiShoppingBasket/></p>
                <p>SHOP NOW</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Slider
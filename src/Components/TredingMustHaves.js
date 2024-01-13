import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import "../css/TredingMustHaves.css"
import { tmh1, tmh2, tmh3 } from '../Asset';

const TredingMustHaves = () => {
  return (
    <>
    <div className="TradingMustHeader">
        <h2>Treding must-haves</h2>
        <p >
          View all{" "}
          <span >
            <FaAngleRight style={{paddingTop:"12px"}} size={25}/>
          </span>
        </p>
      </div>
      
      <div className="mainTredingMust">
        <div className="fistTredingmust" >
        <div className="TradingMustCart">
            <div className="TradingMustTop">
                <img src={tmh1} alt="" />
            </div>
            <div className="TradingMustButtom">
                <div className="details">
                    <h3>Cool & sexy Clavin klein</h3>
                    <p>Dotted dress-Casual</p>
                </div>
                <div className="buttont">
                    $89 Shop Now
                </div>
            </div>
        </div>
        </div>
        <div className="secondTredingmust" >
        <div className="TradingMustCart">
            <div className="TradingMustTop">
                <img src={tmh2} alt="" />
            </div>
            <div className="TradingMustButtom">
                <div className="details">
                    <h3>Cool & sexy Clavin klein</h3>
                    <p>Dotted dress-Casual</p>
                </div>
                <div className="buttont">
                    $89 Shop Now
                </div>
            </div>
        </div>
            
        </div>
        <div className="thirdTredingmust" >
        <div className="TradingMustCart">
            <div className="TradingMustTop">
                <img src={tmh3} alt="" />
            </div>
            <div className="TradingMustButtom">
                <div className="details">
                    <h3>Cool & sexy Clavin klein</h3>
                    <p>Dotted dress-Casual</p>
                </div>
                <div className="buttont">
                    $89 Shop Now
                </div>
            </div>
        </div>
          
        </div>
        
      </div>
    </>
  )
}

export default TredingMustHaves
import React from "react";
import { LeftSide, RigthSide, Side3, Side4 } from "../Asset";
import "../css/ExplorAll.css";
import Corousel from "./Corousel";
import Explor from "./Explor";

const ExplorAll = () => {
  const screenWidth = window.innerWidth;
  return (
    <>
        <div className="mainExpoler">

        
          <Explor />
          <Corousel />
          <div className="MainExplorAll ">
            <div className="LeftSideEx" style={{ backgroundColor: "#D11FB4" }}>
              <div className="fisrtSide">
                <h1>Never-Ending Summer</h1>
                <h2>Throwback Shirts & all-day dressed</h2>
                <u> Explore all category</u>
              </div>
              <div className="SecondSide">
                <img src={Side4} alt="" />
              </div>
            </div>
            <div className="RigthSideEx" style={{ backgroundColor: "#0186C4" }}>
              <div className="fisrtSide">
                <h1>Never-Ending Summer</h1>
                <h2>Throwback Shirts & all-day dressed</h2>
                <u>Explore all category</u>
              </div>
              <div className="SecondSide">
                <img src={Side3} alt="" />
              </div>
            </div>
          </div>
          </div>
        </>
      
  );
};

export default ExplorAll;

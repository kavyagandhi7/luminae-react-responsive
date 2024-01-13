import React from 'react'
import { LeftSide, RigthSide, Side3, Side4 } from "../Asset";
const Explor = () => {
  return (
    <div className="MainExplorAll ">
    <div className="LeftSideEx">
      <div className="fisrtSide">
          <h1>Never-Ending Summer</h1>
          <h2>
              Throwback Shirts & all-day dressed
          </h2>
          <u> Explore all category</u>
      </div>
      <div className="SecondSide">
          <img src={LeftSide} alt="" />
      </div>
    </div>
    <div className="RigthSideEx" style={{backgroundColor:"#1D5159"}}>
    <div className="fisrtSide">
          <h1>Never-Ending Summer</h1>
          <h2>
              Throwback Shirts & all-day dressed
          </h2>
          <u>Explore all category</u>
      </div>
      <div className="SecondSide">
          <img src={RigthSide} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Explor
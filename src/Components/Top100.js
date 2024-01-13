import React from 'react'
import { top1, top2, top3, top4 } from '../Asset'
import "../css/Top100.css"
import { LuHeart } from "react-icons/lu";
import { FaStar } from 'react-icons/fa6';
import { FaAngleRight } from "react-icons/fa";

const Top100 = () => {
    return (
        <>
         <div className="flashHeader topHeader100">
        <h2>Top 100</h2>
        <p>
          View all{" "}
          <span >
            <FaAngleRight style={{paddingTop:"12px"}} size={25}/>
          </span>
        </p>
      </div>

        <div className='top100Main'>
            <div className="firstTop">
               
                <div className="topImgs">
                    <img src={top1} alt="imgTop" />
                </div>
                <div className="Topdetails">
                    <div className="headingTop">
                        <div className="tophead">
                            <h3>Mango</h3>
                            <p style={{ fontSize: "small" }}> Kimono & Caften-Black-Regular fit</p>
                        </div>
                        <LuHeart className='Tophead' />
                    </div>
                    <div className="Topstar">
                        <div className="starTop">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar /> <span>(289)</span>{" "}
                        </div>
                    </div>
                    <div className="Topprice">
                        <p>$228</p>
                        <del>$129</del>
                        <p className="Topdiscout">-10%</p>
                
                </div>
                </div>
            </div>
            <div className="secondTop">
            <div className="topImgs">
                    <img src={top2} alt="imgTop" />
                </div>
                <div className="Topdetails">
                    <div className="headingTop">
                        <div className="tophead">
                            <h3>Mango</h3>
                            <p style={{ fontSize: "small" }}> Kimono & Caften-Black-Regular fit</p>
                        </div>
                        <LuHeart className='Tophead' />
                    </div>
                    <div className="Topstar">
                        <div className="starTop">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar /> <span>(289)</span>{" "}
                        </div>
                    </div>
                    <div className="Topprice">
                        <p>$228</p>
                        <del>$129</del>
                        <p className="Topdiscout">-10%</p>
                    </div>
                </div>
            </div>
            <div className="thirdTop">
            <div className="topImgs">
                    <img src={top3} alt="imgTop" />
                </div>
                <div className="Topdetails">
                    <div className="headingTop">
                        <div className="tophead">
                            <h3>Mango</h3>
                            <p style={{ fontSize: "small" }}> Kimono & Caften-Black-Regular fit</p>
                        </div>
                        <LuHeart className='Tophead' />
                    </div>
                    <div className="Topstar">
                        <div className="starTop">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar /> <span>(289)</span>{" "}
                        </div>
                    </div>
                    <div className="Topprice">
                        <p>$228</p>
                        <del>$129</del>
                        <p className="Topdiscout">-10%</p>
                    </div>
                </div>
            </div>
            <div className="LastTop">
            <div className="topImgs">
                    <img src={top4} alt="imgTop" />
                </div>
                <div className="Topdetails">
                    <div className="headingTop">
                        <div className="tophead">
                            <h3>Mango</h3>
                            <p style={{ fontSize: "small" }}> Kimono & Caften-Black-Regular fit</p>
                        </div>
                        <LuHeart className='Tophead' />
                    </div>
                    <div className="Topstar">
                        <div className="starTop">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar /> <span>(289)</span>{" "}
                        </div>
                    </div>
                    <div className="Topprice">
                        <p>$228</p>
                        <del>$129</del>
                        <p className="Topdiscout">-10%</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Top100
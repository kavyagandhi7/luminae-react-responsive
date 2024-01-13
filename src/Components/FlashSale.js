import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { falshsale, falshsale2, falshsale3, falshsale4 } from "../Asset";
import { FaStar } from "react-icons/fa";
import "../css/FlashSale.css";

const FlashSale = () => {
  return (
    <>
      <div className="flashHeader">
        <h2>Flash Sales</h2>
        <p>
          View all{" "}
          <span >
            <FaAngleRight style={{ paddingTop: "12px" }} size={25} />
          </span>
        </p>
      </div>
      <div className="mainflash">
        <div className="fistFlash">
          <div className="flashCart">
            <div className="flashTime">
              <span className="top">
                DEAL OF THE DAY <br />
                <span className="time">
                  12 <span>:</span>
                  <span>43</span>
                  <span>:</span>12
                </span>
                <span className="timeLetter">hour <span>min</span> sec</span>
              </span>
            </div>
            <div className="flashImg">
              <img src={falshsale} alt="falshImg" />
            </div>
            <div className="flashdetails">
              <div className="FLASHname">Tonny Black</div>
              <p>Shoulder bag-white-plain</p>
              <p className="star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> <span>(54)</span>{" "}
              </p>
              <div className="price">
                <p style={{
                  color: "red",
                  fontSize: 20
                }}>$69.99</p>
                <del>$129.99</del>
                <p className="discout">-40%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="secondFlash">
          <div className="flashCart">
            <div className="flashTime">
              <span className="top">
                DEAL OF THE DAY <br />
                <span className="time">
                  12 <span>:</span>
                  <span>43</span>
                  <span>:</span>12
                </span>
                <span className="timeLetter">hour <span>min</span> sec</span>
              </span>
            </div>
            <div className="flashImg">
              <img src={falshsale4} alt="falshImg" height={150} />
            </div>
            <div className="flashdetails">
              <div className="FLASHname">Tonny Black</div>
              <p>Shoulder bag-white-plain</p>
              <p className="star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> <span>(54)</span>{" "}
              </p>
              <div className="price">
                <p>$69.99</p>
                <del>$129.99</del>
                <p className="discout">-40%</p>
              </div>
            </div>
          </div>

        </div>
        <div className="thirdFlash">
          <div className="flashCart">
            <div className="flashTime">
              <span className="top">
                DEAL OF THE DAY <br />
                <span className="time">
                  12 <span>:</span>
                  <span>43</span>
                  <span>:</span>12
                </span>
                <span className="timeLetter">hour <span>min</span> sec</span>
              </span>
            </div>
            <div className="flashImg">
              <img src={falshsale3} alt="falshImg" />
            </div>
            <div className="flashdetails">
              <div className="FLASHname">Tonny Black</div>
              <p>Shoulder bag-white-plain</p>
              <p className="star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> <span>(54)</span>{" "}
              </p>
              <div className="price">
                <p>$69.99</p>
                <del>$129.99</del>
                <p className="discout">-40%</p>
              </div>
            </div>
          </div>

        </div>
        <div className="FourFlash">
          <div className="flashCart">
            <div className="flashTime">
              <span className="top">
                DEAL OF THE DAY <br />
                <span className="time">
                  12 <span>:</span>
                  <span>43</span>
                  <span>:</span>12
                </span>
                <span className="timeLetter">hour <span>min</span> sec</span>
              </span>
            </div>
            <div className="flashImg">
              <img src={falshsale2} alt="falshImg" />
            </div>
            <div className="flashdetails">
              <div className="FLASHname">Tonny Black</div>
              <p>Shoulder bag-white-plain</p>
              <p className="star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> <span>(54)</span>{" "}
              </p>
              <div className="price">
                <p>$69.99</p>
                <del>$129.99</del>
                <p className="discout">-40%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default FlashSale;

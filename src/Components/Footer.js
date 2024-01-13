import React from "react";
// import { FaTelegramPlane } from "react-icons/fa";
import "../css/Footer.css";
import { footer1} from "../Asset";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="mainFooter">
                <div className="topdiv">
                    <div className="fistFooter">
                        <h2>
                            Luminae <span>Store</span>
                        </h2>
                        <p>Register email to miss last minutes off+ Free delivery</p>
                        <div className="emailbottom">
                            <div className="emailFooter">
                                <input type="text" placeholder="Enter your email" />
                                <FaTelegramPlane className="iconss" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondFooter">
                    <div className="fist">
                        <p className="head">Company</p>
                        <p>About Us</p>
                        <p>Our Store</p>
                        <p>Contact us</p>
                    </div>
                    <div className="second">
                        <p className="head">Career Opportunities</p>
                        <p>Selling Programs</p>
                        <p>Advertise</p>
                        <p>Cooperation</p>
                    </div>
                    <div className="third">
                        <p className="head">How to Buy</p>
                        <p>Maring Pyments</p>
                        <p>Delivery options </p>
                        <p>Buys Protection</p>
                        <p>New User Guide</p>
                    </div>
                    <div className="for">
                        <p className="head">Help</p>
                        <p>Contacts Us</p>
                        <p>FAQ</p>
                        <p>Privarcy Policy</p>
                    </div>
                </div>
                <div className="lastFooter">
                    <div className="topLast">
                        <div className="imagesss">
                            <img src={footer1} alt="1" width={200} style={{ color: "red" }} />
                        </div>
                        <div className="rigthsideFooter">
                            <select className="option">
                                <option value="11" >English</option>
                                <option value="22">Hindi</option>
                                <option value="33">Beritish</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className="bottomFooter">
                        <p className="pfisrt">165-179 Forster Road City of Monash,Melbourne,Australia</p>
                        <p className="secondP">© 2023 Copyrigh in reseved for lumie shop</p>
                        <div className="iconpages">
                            <RiInstagramFill />
                            <FaFacebookF />
                            <FaTelegramPlane />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;

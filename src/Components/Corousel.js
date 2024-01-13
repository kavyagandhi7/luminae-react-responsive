import React from 'react'
import { FaChevronLeft ,FaChevronRight} from "react-icons/fa";
import { Iphone } from '../Asset'
import "../css/Corousel.css"

const Corousel = () => {
  return (
    <div className='MainCorousel'>
        <div className="LesfICON"><FaChevronLeft/></div>
        <div className="CorouselDetails">
            <h2>MAGSAFE</h2>
            <p>Snap on a magnetic case, wallet, or both. And get faster wireless charging.</p>
        </div>
        <div className="corouselImg">
            <img src={Iphone} alt="" />
        </div>
        <div className="rigthSide"><FaChevronRight/></div>
    </div>
  )
}

export default Corousel
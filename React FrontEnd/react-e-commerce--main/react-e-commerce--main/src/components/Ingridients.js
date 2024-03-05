import React from 'react'
import "../styles/Ingridients.css"

import ing1 from "../assets/ing1.png";
import three from "../assets/three.png";
import ing3 from "../assets/ing3.png";
import ing4 from "../assets/ing4.png";
import ing5 from "../assets/ing5.png";
import ing6 from "../assets/ing6.png";



const Ingridients = () => {
    return (
        <div className='ingMainParent'>
            <p className=' text-4xl ogtext font-medium text-center mb-16'> WHY CHOOOSE US </p>

            <div className='ingImgHold flex flex-row gap-36 justify-center'>
                <img src={ing1} className="zoom1" />
                <img src={three} className="zoom1" />
                <img src={ing3} className="zoom1" />
                <img src={ing4} className="zoom1" />
                <img src={ing5} className="zoom1" />
                <img src={ing6} className="zoom1" />
            </div>

            <div className='ingTextHold flex flex-row gap-10 justify-center'>
                <p className='ingTextHold1 flex flex-col justify-center'> Sustainability </p>
                <p className='ingTextHold2 flex flex-col justify-center'> Innovative Technology </p>
                <p className='ingTextHold3 flex flex-col justify-center'> Braking Performance </p>
                <p className='ingTextHold4 flex flex-col justify-center'> All-Season Performance </p> 
                <p className='ingTextHold5 flex flex-col justify-center'> Comfort and Smooth Ride</p>
                <p className='ingTextHold6 flex flex-col justify-center'> High-Speed Stability </p>

            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />



        </div>
    )
}

export default Ingridients
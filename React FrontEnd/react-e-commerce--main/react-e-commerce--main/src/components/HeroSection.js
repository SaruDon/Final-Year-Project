import React from 'react'
import "../styles/HeroSection.css"
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"


const HeroSection = () => {
    return (
        <div className='heroSecMainParent'>

            <p className='text-4xl mt-20 text-center welcomStore'>WELCOME TO OUR STORE</p>
            <br />
            <br />


            <p className='heroDescription relative text-xl flex flex-wrap'>Where your journey begins with exceptional choices and unparalleled experiences.<br /> Step into a world of quality and style, curated just for you. Explore our diverse collection, designed to elevate your lifestyle and meet your every need.  </p>


            <div className='heroPicHold flex flex-row '>
                <img src={one} className=" w-20" />
            </div>
            <div className='heroPicHold1 flex flex-row '>
                <img src={two} className=" w-20" />
            </div>
            <div className='heroPicHold2 flex flex-row '>
                <img src={three} className=" w-20" />
            </div>

            <div className=' text-xl font-medium flex flex-row heroHeadingHold'>
                <p> Recyclable </p>
                <p> Exceptional Quality </p>
            </div>
            <div className=' text-xl font-medium flex flex-row heroHeadingHold1'>
                <p> Innovative Technology </p>
            </div>

            <div className='heroDescHold flex-row flex relative text-base font-normal'>
                <p> Engineered with Care and Consciousness Tires: We craft from premium, responsibly sourced materials, combining cutting-edge technology with a commitment to sustainability. </p>
            </div>
            <div className='heroDescHold1 flex-row flex relative text-base font-normal'>    
                <p> Exceptional Quality, Unmatched Performance: We take pride in delivering tires of extraordinary quality.</p>
            </div>
            <div className='heroDescHold2 flex-row flex relative text-base font-normal'> 
                <p> Innovative Technology for a Smoother Ride: Elevate your driving experience with [Your Brand] tires, where cutting-edge technology meets the road. </p>
            </div>
        </div>
    )
}

export default HeroSection
import React from 'react'
import "../styles/Body.css";
import { useState } from 'react';
import { store } from '../productsStore/Store';
import HoverImage from "react-hover-image/build"
import { Link } from 'react-router-dom';

const Body = () => {

    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);


    const showHandler = () => {
        setShow(true)
        document.querySelector(".bodyContent").classList.add("transition");
        setShow2(false)
        setShow3(false)
        setShow4(false)

        document.querySelector(".bodyContent").style.opacity = "1";
        document.querySelector(".hairContent").style.opacity = "0";
        document.querySelector(".newContent").style.opacity = "0";
        document.querySelector(".travelContent").style.opacity = "0";

    }

    const showHandler2 = () => {
        setShow2(true)
        document.querySelector(".hairContent").classList.add("transition2");
        setShow(false)
        setShow3(false)
        setShow4(false)


        document.querySelector(".hairContent").style.opacity = "1";
        document.querySelector(".bodyContent").style.opacity = "0";
        document.querySelector(".newContent").style.opacity = "0";
        document.querySelector(".travelContent").style.opacity = "0";

    }

    const showHandler3 = () => {
        setShow3(true)
        document.querySelector(".travelContent").classList.add("transition3");
        //document.querySelector(".hairContent").style.opacity = "0";
        //document.querySelector(".newContent").style.opacity="0"
        setShow(false)
        setShow2(false)
        setShow4(false)

        document.querySelector(".travelContent").style.opacity = "1";
        document.querySelector(".hairContent").style.opacity = "0";
        document.querySelector(".bodyContent").style.opacity = "0";
        document.querySelector(".newContent").style.opacity = "0";
    }

    const showHandler4 = () => {
        setShow4(true)
        document.querySelector(".newContent").classList.add("transition4");
        //document.querySelector(".travelContent").style.opacity = "0";
        setShow(false)
        setShow2(false)
        setShow3(false)

        document.querySelector(".newContent").style.opacity = "1";
        document.querySelector(".hairContent").style.opacity = "0";
        document.querySelector(".bodyContent").style.opacity = "0";
        document.querySelector(".travelContent").style.opacity = "0";
    }


    const dontShowHandler = () => {
        setShow(false)
        setShow2(false)
        setShow3(false)
        setShow4(false)

        document.querySelector(".newContent").style.opacity = "0";
        document.querySelector(".hairContent").style.opacity = "0";
        document.querySelector(".bodyContent").style.opacity = "0";
        document.querySelector(".travelContent").style.opacity = "0";

    }
    return (
        <div>
            <div className='categoryHold flex flex-col gap-14 font-normal absolute left-16 top-11'>

                <div className='bodyHold lineHeight w-56 w56rem' onMouseMove={showHandler}>
                    <p className=' font-semibold hover-underline-animation'>WAGON</p>
                </div>

                <div className='hairHold lineHeight w-56' onMouseMove={showHandler2}>
                    <p className=' font-semibold hover-underline-animation'>SEDAN</p>
                </div>

                <div className='travelHold w-52 lineHeight' onMouseMove={showHandler3}>
                    <p className=' font-semibold hover-underline-animation'>HATCHBACK</p>
                </div>



                <div className='newHold lineHeight' onMouseMove={showHandler4}>
                    <p className=' font-semibold hover-underline-animation'>SUV</p>
                </div>



            </div>



            {show && <div className=' z-50 bodyContent color text-base' onMouseLeave={dontShowHandler}>
                <p>   195/65R15</p>
                <p>   205/55R16 </p>
                <p>   215/60R16 </p>
                <p>   225/50R17 </p>
                <p>   230/45R18 </p>
                <p>   235/45R17 </p>

                <div className='bodyTypeHold flex'>
                    {store.map((item) => {
                        if (item.type == "navbar-BodyType") {
                            return (
                                <Link to={`/₹{item.id}`} key={item.id}>

                                    <div key={item.id} className="bodyTypeIndivitual">
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className="rounded-xl bodyTypeImage" />
                                        <p className=' text-center fs bodyTypeName'> {item.name} </p>
                                    </div>

                                </Link>)
                        }
                    })}
                </div>

            </div>}



            {show2 && <div className=' z-50 hairContent flex flex-col' onMouseLeave={dontShowHandler}>
                <div className='hairTypeCategoryONE flex flex-col gap-8'>
                    <p className=' font-bold text-xl'>  CATEGORY </p>
                    <p>  Turanza </p>
                    <p>  Wrangler </p>
                    <p>  Milzae </p>
                </div>


                <div className='hairTypeCategoryTWO flex flex-col gap-8'>
                    <p className='font-bold text-xl' style={{ marginBottom: '-8px'}}>  Types </p>
                    <p>  215/65R16 </p>
                    <p>  225/60R17 </p>
                    <p>  235/55R18 </p>
                    <p>  245/50R19 </p>
                    <p>  255/45R20 </p>
                </div>

                <div className='hairImageHold flex flex-row gap-10'>
                    <img src='https://tyresnmore.com/media/catalog/product/cache/93d988f0234d07ea7c39b6510adf0279/w/r/wrangler_at_silentrac_1_2_1.jpg' className=' rounded-xl w-52' />
                    <img src='https://tyresnmore.com/media/catalog/product/cache/93d988f0234d07ea7c39b6510adf0279/t/0/t001.jpg' className=' rounded-xl w-52' />
                </div>

                <div className='hairTextHold flex flex-row relative font-semibold'>
                    <p className='flex flex-row flex-wrap w-56 text-center'>Turanza R16 T005 245/70 ₹9,549</p>
                    <p className='flex flex-row flex-wrap w-56 text-center'>Wrangler 205/60 R16 ₹9,337</p>
                </div>



            </div>}

            {show3 && <div className='z-50 travelContent' onMouseLeave={dontShowHandler}>
                <div className='flex flex-row'>
                    <div className='TravelStoreHold flex flex-row gap-16'>
                        {store.map((item) => {
                            if (item.type == "navbar-TravelType") {
                                return (
                                    <Link to={`/₹{item.id}`} key={item.id}>

                                        <div key={item.id} className="TravelIndivitual">
                                            <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className=" rounded-xl w-40" />
                                            <p className=' font-semibold text-base px'> {item.name} </p>
                                            <p className='text-base font-normal text-center'> ₹{item.price} </p>
                                        </div>
                                    </Link>
                                )
                            }
                        })}
                    </div>

                </div>
            </div>}





            {show4 && <div className='newContent relative left-72 text-base text-gray-500 top-16' onMouseLeave={dontShowHandler}>
                <div className='newCategoryHold flex flex-col gap-9'>
                    <p className='font-bold text-xl'>  CATEGORY </p>

                    <p>  235/65R17 </p>

                    <p>  255/70R16 </p>

                    <p>  265/60R18 </p>

                    <p>  275/55R20 </p>
                </div>

                <div className='newTypeHold relative flex felx-row gap-10'>
                    {store.map((item) => {
                        if (item.type == "navbar-NewType") {
                            return (
                                <Link to={`/₹{item.id}`} key={item.id}>

                                    <div className='newIndivitual'>
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className=" rounded-xl w-40" />
                                        <p className='font-semibold text-center text-base px'> {item.name} </p>
                                        <p className='text-base font-normal text-center'> ₹{item.price} </p>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                </div>

            </div>}



        </div>
    )
}

export default Body

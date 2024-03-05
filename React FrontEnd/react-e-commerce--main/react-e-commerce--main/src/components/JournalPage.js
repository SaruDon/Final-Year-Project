import React from 'react';
import "../styles/JournalPage.css"
import hair from "../assets/hair.jpeg";
import video1 from "../assets/video1.mp4";
import better from "../assets/better.jpeg";
import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import JournalPageFooter from './JournalPageFooter';

const JournalPage = () => {
  return (<div className='journalPageMainParent-1'>
    <div className='journalPageMainParent'>
      <p className='sjText fof text-3xl font-medium text-center absolute'> THE TYRE JOURNAL </p>

      <div className='paraHold absolute'>
        <p className='text-center'> WE BELIEVE IN MOVING EVERYONE FORWARD
          THROUGH TECHNOLOGICAL
          AND SOCIAL PROGRESS
        </p>
      </div>

      <p className='fof text-2xl font-medium text-center absolute aprilBlogHeading'> OUR PURPOSE </p>
      <p className='fof text-xl font-medium mt-10 text-center absolute aprilBlogHeading'>CONSTANTLY PUSHING INNOVATION
        IN A CULTURED, SUSTAINABLE
        AND CONSIDERATE MANNER
      </p>

      {/* <div className='hairImgHold'>
      <video class="desktop-video"  autoPlay loop playsInline data-wf-ignore="true" width="430" height="430" >
        <source src={video1} type="video/mp4" /> */}
      {/* <source src={video1} type="video/mp4"> </source>
      <source src={video1} type="video/ogg"></source> */}
      {/* </video>
      </div> */}

      <div className='hairImgHold'>
        <video class="desktop-video" muted autoPlay loop playsInline data-wf-ignore="true" width="430" height="430">
            <source src={video1} type="video/mp4"></source>
           
        </video>
      </div>

      <div className='jhold flex flex-col absolute'>

        <p> Pirelli was founded in Milan in 1872 and today stands as a global brand known for its cutting-edge technology, high-end production excellence and passion for innovation that draws heavily on its Italian roots. With 18 production plants in 12 countries and a commercial presence in over 160, Pirelli has around 31,300 employees and had a turnover of about 6.6 billion euro in 2022. It is among the world’s major producers of tyres and associated services and the only one focused solely on the Consumer tyre market.
        </p>


        <p>     <li className='text-left mb-3 fof text-xl '> REVENUES </li>  Pirelli, a Pure Consumer Tyre Company, has a particular focus on the High Value1 tyre market and is constantly engaged in the development of innovative products created to reach the highest levels of performance, safety, noise reduction and adherence to the road surface. Tyres to address the most specific mobility needs of the final Consumer. Within the tyre industry, Pirelli competes with “Tier 1” manufacturers that have higher than average price positioning, a wide range of products and dedicated regional lines. 

          Tip:  Embrace your natural beauty and show off your hair without styling!!

        </p>



        <p>   <li className='text-left mb-3 fof text-xl '> A HIGH VALUE RANGE OF CONSUMER TYRES </li>  74 MILLION CAR TYRE
          CAPACITY PER YEAR. 73% OF TOTAL CAPACITY FROM HIGH-VALUE TYRES

          Over the years, Pirelli has concentrated, above all, on the development, production and marketing of tyres with large rim sizes, special technical and aesthetic characteristics and associated with high performance, advanced technology and safety. Recognized by consumers as high value products, the company’s product range consists of innovative tyres for cars, motorcycles, and bicycles, as well as a growing portfolio of tyres for specific applications and customized ones. Among them Pirelli Cyber™ Tyre, the result of the most recent Research & Development activities and technological innovation, which thanks to sensors inside the tyre (the only element of the car capable of ‘sensing’ the conditions of the surface on which it is being driven) will contribute to the delivery of essential information to improve vehicle performance and driving safety. 
          </p>




        <p>   <li className='text-left mb-3 fof text-xl '> CAPACITY FOR CONTINUAL TECHNOLOGICAL INNOVATION </li> 2000 
          PEOPLE INVOVLED IN R&D. 5900 PATENTS. ABOUT 5% OF HIGH VALUE REVENUES DEVOTED ON AVERAGE TO R&D IN THE LAST YEARS. COOPERATIONS WITH PREMIUM OEM PRODUCTS.
          <p>
          All of this has grown from a strong commitment to Research and Development based on an “Open Innovation” model. In 2022, Pirelli’s investment in R&D stood at more than 5% of its revenues from High Value products, one of the highest levels among the world’s major tyre producers. 
          </p>

        </p>

      </div>



      <div className='footerFeatures3 flex flex-row absolute'>
        <FaShippingFast className=' w-24 h-20 mt-2 widthHeight' />
        <FaLock className='w-14 h-24 mb-6 widthHeight' />
        <BsCurrencyDollar className='mt-2 w-24 h-20 widthHeight dollarsign' />
        <img src={better} className="w-20 h-21  mb-8 widthHeight" alt='hey' />
      </div>

      <div className='footerFeatures3TextHold fof flex flex-row absolute uppercase'>
        <p> 2 DAY DELIVERY </p>
        <p> secure checkout </p>
        <p> worldwide delivery  </p>
        <p> easy returns </p>
      </div>

      <div className='jfHold absolute'>
        <JournalPageFooter />
      </div>


    </div>
  </div>
  )
}

export default JournalPage
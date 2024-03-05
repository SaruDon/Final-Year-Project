import React from 'react'
import "../styles/JournalSection.css"
import { Link } from 'react-router-dom'
import video1 from "../assets/video1.mp4";
import tyrejournal from'../assets/tyrejournal.png';
import tyrevideo from'../assets/tyrevideo.mp4';



const JournalSection = () => {
   
    return (
        <div className='jsMainParent mt-28'>

            <div className='jsLeft'>
                {/* <img src={tyrejournal} alt='hey' className=' w-72' /> */}
                <div className=' w-72'>
                        <video class="desktop-video" muted autoPlay loop playsInline data-wf-ignore="true" width="430" height="430">
                            <source src={tyrevideo} type="video/mp4"></source>
                        </video>
                    </div>
                <p className=' mt-8'> WE BELIEVE IN MOVING EVERYONE FORWARD <br /> THROUGH TECHNOLOGICAL AND SOCIAL 
                <br /> PROGRESS 
                   </p>

                <Link to={`/journal/april`}>
                    <button className='readBtn '> READ THE JOURNAL </button>
                </Link>
            </div>

            <div className='jsRight flex flex-row gap-24'>

                <Link to={`/journal/april`}>
                    {/* <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/400x400_blog_540x.jpg?v=1652511342' alt='hey' className='jsImg rounded-xl' /> */}
                    <div className='jsImg' rounded-xl>
                        <video class="desktop-video" muted autoPlay loop playsInline data-wf-ignore="true" width="430" height="430">
                            <source src={video1} type="video/mp4"></source>
                        </video>
                    </div>
                </Link>

                <img src='https://binaries.pirelli.com/2024/01/08/100210095-51f54da8-9f51-4b57-ac84-41c2de3cdd9d.jpg' alt='hey' className='jsImg rounded-xl' />


            </div>

            <div className='jsRightText flex flex-row  relative font-bold'>
                <p> Blog and About Us </p>
                <p> Winter Tyre Safety, How to drive on Ice</p>


            </div>
        </div>
    )
}

export default JournalSection
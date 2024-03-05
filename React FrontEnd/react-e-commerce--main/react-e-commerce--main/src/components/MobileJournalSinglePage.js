import React from 'react'
import { Link } from 'react-router-dom'
import tyrejournal from '../assets/tyrejournal.png'
import video1 from '../assets/../assets/video1.mp4';

const MobileJournalSinglePage = () => {
    return (
        <div>
            <div className='jsMainParent mt-28' id='mjspJournal'>

                <div className='jsLeft'>
                    <img src={tyrejournal} alt='hey' className=' w-72' />
                    <p className=' mt-8'> WE BELIEVE IN MOVING EVERYONE FORWARD<br />
                    THROUGH TECHNOLOGICAL<br />
                    AND SOCIAL PROGRESS<br />
                    </p>

                    <Link to={`/journal/april`}>
                        <button className='readBtn '> READ THE JOURNAL </button>
                    </Link>
                </div>

                <div className='jsRight flex flex-row gap-24'>

                    <Link to={`/journal/april`}>
                    <div className='hairImgHold'>
                        <video class="desktop-video" muted autoPlay loop playsInline data-wf-ignore="true" width="430" height="430">
                            <source src={video1} type="video/mp4"></source>
                            {/* <source src="https://www.mrftyres.com/images/videos/mrf-tree-video.ogg" type="video/ogg"></source>  */}
                        </video>
                    </div>
                    </Link>

                    <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/BBQ_1200x440_7b63676b-f505-4b21-9192-e1b43a53be32_540x.jpg?v=1625596357' alt='hey' className='jsImg rounded-xl' />


                </div>

                <div className='jsRightText flex flex-row gap-36 relative font-bold'>
                    <p> APRIL BLOG: PROTECTIVE HAIRCARE <br />  STYLE AND TIPS </p>
                    <p> SUKINS GUIDE TO A BACKYARD BBQ</p>


                </div>
            </div>
        </div>
    )
}

export default MobileJournalSinglePage
import React from 'react'
import firstImg from '../img/sixthSecImg1.png'
import secondImg from '../img/sixthSecImg2.png'
import thirdImg from '../img/sixthSecImg3.png'
import fourthImg from '../img/sixthSecImg4.png'
import fifthImg from '../img/sixthSecImg5.png'
import sixthImg from '../img/sixthSecImg6.png'

export const SixthSection = () => {
    return (
        <div>
            <div className='sixthsectioncontainer'>
                <div className="heading">
                    <div className='head'>App <span>Design</span></div>
                    <div className="line">
                        <svg width="47" height="4" viewBox="0 0 47 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L45 2" stroke="#FFCC00" strokeWidth="4" strokeLinecap="round" />
                        </svg>

                    </div>
                </div>
                <div className="imgContainer">
                    <div className="firstImgRow">
                        <div className='manMargin'><img src={firstImg} alt="" /></div>
                        <div  ><img src={fourthImg} alt="" /></div>
                    </div>
                    <div className="secondImgRow">
                        <div><img src={secondImg} alt="" /></div>
                        <div> <img src={fifthImg} alt="" /></div>
                    </div>
                    <div className="thirdImgRow">
                        <div className='manMargin'><img src={thirdImg} alt="" /></div>
                        <div><img src={sixthImg} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="package">

            </div>
        </div >
    )
}

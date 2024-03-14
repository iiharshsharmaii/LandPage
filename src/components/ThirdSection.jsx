import React from 'react'
import AppLogo from '../img/appLogo.png'
import AppSs1 from '../img/appSs1.png'
import AppSs2 from '../img/appSs2.png'
import AppSs3 from '../img/appSs3.png'
import Group2 from '../img/Group2.png'
import Group from '../img/Group.png'

export const ThirdSection = () => {

    window.addEventListener("scroll", function (e) {
        let scroll = window.scrollY;

        const ss1 = document.getElementById('ss1');
        const ss2 = document.getElementById('ss2');
        const ss3 = document.getElementById('ss3');

        if (scroll > 1000) {
            if (ss1 && ss2 && ss3) {
                ss1.style.opacity = '1';
                ss2.style.opacity = '0.7';
                ss3.style.opacity = '0.4';
            } else {
                console.error("One or more of the elements with IDs 'ss1', 'ss2', and 'ss3' not found.");
            }
        } if (scroll > 1700) {
            if (ss1 && ss2 && ss3) {
                ss1.style.opacity = '0.4';
                ss2.style.opacity = '1';
                ss3.style.opacity = '0.7';
            } else {
                console.error("One or more of the elements with IDs 'ss1', 'ss2', and 'ss3' not found.");
            }
        } if (scroll > 2000) {
            if (ss1 && ss2 && ss3) {
                ss1.style.opacity = '0.7';
                ss2.style.opacity = '0.4';
                ss3.style.opacity = '1';
            } else {
                console.error("One or more of the elements with IDs 'ss1', 'ss2', and 'ss3' not found.");
            }
        }
    });


    return (
        <>
            <div className='thirdSectionContainer'>
                <div className="leftBg">
                    <img src={Group} alt="" />
                </div>
                <div className='intro'>
                    <div className='heading'><h1>Introducing</h1></div>
                    <div className="line2">
                        <svg width="47" height="4" viewBox="0 0 47 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L45 2" stroke="#FFCC00" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="appName"><p>SK App</p></div>
                    <div className="appLogo"><img src={AppLogo} alt="" /></div>
                </div>
                <div className='appSs'>
                    <img src={AppSs1} alt="" id='ss1' />
                    <img src={AppSs2} alt="" id='ss2' />
                    <img src={AppSs3} alt="" id='ss3' />
                </div>
                <div className="rightBg">
                    <img src={Group2} alt="" />
                </div>
            </div>
        </>
    )
}

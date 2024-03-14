import React from 'react'
import Instagram from '../img/instagram.png'
import Youtube from '../img/youtube.png'
import Twitter from '../img/twitter.png'
import Facebook from '../img/facebook.png'
import Logo from '../img/logo2.png'
import Arrow from '../img/arrow.png'

export const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className="logo2Media">
            <div className="logo2"><img src={Logo} alt="" /></div>
            <div className="media">
                <a href="https://www.facebook.com/" target='_blank'><img src={Facebook} alt="" /></a>
                <a href="https://www.instagram.com/" target='_blank'><img src={Instagram} alt="" /></a>
                <a href="https://twitter.com/" target='_blank'><img src={Twitter} alt="" /></a>
                <a href="https://www.youtube.com/" target='_blank'><img src={Youtube} alt="" /></a>
                </div>
        </div>

        <div className="contact">
            <div className="news">NEWS LETTER</div>
            <div className="subscribe">Subscribe our newsletter to get our latest update & news</div>
            <div className="input"><input type="email" placeholder='Your email address.'/><div className="butContainer"><button><img src={Arrow} alt="" /></button></div></div>
        </div>
    </div>
  )
}

import { useEffect } from 'react';
import NavBar from './NavBar';
import  './css/homePageCss.css';
import 'aos';
import textVideo from './video/textVideo2.mp4';
import starryNight from './images/starryNight1.jpeg';
import arrow from './images/arrow-down-sign-to-navigate.png'
import topHalf from './images/starryNight1 tophalf.png';
import bottomHalf from './images/starryNight1 bottomHalf.png';


export default function HomePage(params) {
    return(
        <div className='homePageDiv' data-aos="zoom-out">
            <NavBar></NavBar>
            <div className="shootingStarWrapper">
                <div className="shootingStar"></div>
                <div className="shootingStarTail"></div>
            </div>
            <div className="shootingStarWrapper1">
                <div className="shootingStar"></div>
                <div className="shootingStarTail"></div>
            </div>
            <div className="shootingStarWrapper2">
                <div className="shootingStar"></div>
                <div className="shootingStarTail"></div>
            </div>
            <div className="shootingStarWrapper3">
                <div className="shootingStar"></div>
                <div className="shootingStarTail"></div>
            </div>
            <div className="shootingStarWrapper4">
                <div className="shootingStar"></div>
                <div className="shootingStarTail"></div>
            </div>
            <div className="shootingStarWrapper5">
                <div className="shootingStar"></div>
                <div className="shootingStarTail"></div>
            </div>
            <div className="shootingStarWrapper6">
                <div className="shootingStar"></div>
                <div className="shootingStarTail"></div>
            </div>
            <div className="shootingStarWrapper7">
                <div className="shootingStar"></div>
                <div className="shootingStarTail"></div>
            </div>
            <div className="shootingStarWrapper8">
                <div className="shootingStar"></div>
                <div className="shootingStarTail"></div>
            </div>
            <div className="shootingStarWrapper9">
                <div className="shootingStar"></div>
                <div className="shootingStarTail"></div>
            </div>

            <div className="starryNightBg">
                <img src={topHalf} alt="" className='starryNightBgT'/>
                <img src={bottomHalf} alt="" className='starryNightBgB' id='starryNightBgB'/>
            </div>
            <div className="momentumText">MOMENTUM 2023</div>
            {/* scroll down animation */}
            <div className="scrollButton" >
                <div className="lineDiv">
                </div>
                <img src={arrow} alt="" className='arrow' id='arrow1'/>
            </div>
        </div>
    )
};

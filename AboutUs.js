import './css/aboutUsCss.css';
import Momentum22AfterMovie from './video/Momentum22AfterMovie.mp4';
import momentum22 from './video/momentum22.webm';
import NCU from './images/NCU-2.png';
import { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'


export default function AboutUs(params) {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    useEffect(()=>{
        let starTwinkleWrapper= document.getElementById('starTwinkleWrapper');
        window.addEventListener('scroll',(event)=>{
            let y= window.scrollY;
            console.log(y);
        })
    },[])
    return(
        <>
        <div className="aboutUs">
            <div className="starTwinkleWrapper" id='starTwinkleWrapper'>

            </div>
            <div className="aboutUsWrapper">
                <div className="poweredBy" data-aos="fade-right">
                    POWERED BY
                </div>
                <div className="ncuHeading" data-aos="fade-left" >
                    THE NORTHCAP <br />
                    UNIVERSITY
                </div>
                <div className="locationNcu" data-aos="fade-right" data-aos-duration="0.2">
                    Based in Gurgaon, Haryana
                </div>
                <div className="ncuDescription" data-aos="fade-up" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic enim eaque. Saepe ab excepturi velit neque labore inventore perferendis hic iste alias?
                </div>
            </div>
            <img src={NCU} alt="" className='ncuLogo' data-aos="zoom-in"/>
        </div>
        <video src={momentum22} autoPlay muted loop className='introVideo' data-aos="zoom-in"></video>
        </>
    )
};

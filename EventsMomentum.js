
import video1 from "./video/video1.mp4";
import video2 from "./video/video2.mp4";
import video3 from "./video/video3.mp4";
import video123 from './video/123.mp4';
import video124 from './video/124-1.mp4';
import './css/eventsCss.css';
import EventCardHomePage from './EventCardHomePage';
import { useEffect } from "react";
import AOS from 'aos'
import  'aos/dist/aos.css'


export default function EventsMomentum(params) {
    let flag=0;
    let i=0;
    let lengthDiv= "",allEventsButton="";
    useEffect(()=>{
        lengthDiv=document.getElementById('lengthDiv');
        allEventsButton= document.getElementById('allEventsButton');
    },[])
    function addLength(){
        
        if(flag===0){
            flag=1;
            allEventsButton.style.color="black";
            allEventsButton.style.fontSize="4.6rem";
            let frame=()=>{
                if(i>=35 || flag===0) clearInterval(increase);
                if(i<=35){
                    i+=2;
                    lengthDiv.style.width=i+"vw";
                }
            }
            let increase=setInterval(frame,1)
        }
        console.log(lengthDiv)
    }
    function subLength(){
        if(flag===1){
            flag=0;
            allEventsButton.style.color="white";
            allEventsButton.style.fontSize="4rem";
            let frame=()=>{
                if(i<0 || flag===1) clearInterval(decrease);
                if(i>=0){
                    i=i-2;
                    lengthDiv.style.width=i+"vw";
                }
            }
            let decrease=setInterval(frame,5)
        }
        console.log(lengthDiv)
    }
    return(
        <>
            <div className="eventsWrapper">
                <div className="eventsHeading" data-aos="fade-left">
                    OUR EVENTS
                </div>
                <div className="allEvents">
                    <div className="eventGrid">
                        <div>
                            <EventCardHomePage videoUrl={video123} data_aos="fade-right"></EventCardHomePage>
                            <EventCardHomePage videoUrl={video124} data_aos="fade-right"></EventCardHomePage>
                        </div>
                        <div>
                            <EventCardHomePage videoUrl={video2} data_aos="fade-left"></EventCardHomePage>
                            <EventCardHomePage videoUrl={video1} data_aos="fade-down"></EventCardHomePage>
                        </div>
                    </div>
                </div>
                <div className="allEventsButton" id="allEventsButton" data-aos="zoom-out" onMouseOver={addLength} onMouseLeave={subLength}>
                    <div className="lengthDiv" id="lengthDiv">

                    </div>
                    SEE ALL
                </div>
            </div>

        </>
    )
};
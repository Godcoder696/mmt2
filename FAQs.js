import { useEffect } from 'react';
import FAQCss from './css/FAQCss.css'
export default function FAQs(params) {
    return(
        <>
            <div className="faqWrapper" >
                <div className="faqHeading" data-aos="fade-down">
                    FAQs
                </div>
                <div className="faqContent" data-aos="zoom-out">
                    <div className="box1" id='box1' data-aos="fade-down" >
                        How do I confirm my participation in the fest ?
                        <div className="ani" id='lengthDiv1'></div>
                    </div>
                    <div className="box1" data-aos="fade-down" id='box1' data-aos-delay="100">
                        How is Momentum being conducted this year ?
                        <div className="ani" id='lengthDiv'></div>
                    </div>
                    <div className="box1" data-aos="fade-down" data-aos-delay="100">
                        How is Momentum being conducted this year ?
                        <div className="ani" id='lengthDiv'></div>
                    </div>
                    <div className="box1" data-aos="fade-down" data-aos-delay="100">
                        Who can attend Momentum ?
                        <div className="ani" id='lengthDiv'></div>
                    </div>
                    <div className="box1" data-aos="fade-down" data-aos-delay="100">
                        Will there be food stalls in the fest ?
                        <div className="ani" id='lengthDiv'></div>
                    </div>
                    <div className="box1" data-aos="fade-down" data-aos-delay="100">
                        Can we refund registration fee if we did not attend the event ?
                        <div className="ani" id='lengthDiv'></div>
                    </div>
                </div>
            </div>
        </>
    )
};

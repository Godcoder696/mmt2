
import sponsorsCss from './css/sponsorsCss.css';
import adiddas from './images/Addidas.png'
export default function Sponsors(params) {

    return(
        <>
            <div className="sponsorWrapper">
                <div className="sponsorshead" data-aos="fade-right">
                    OUR SPONSORS
                </div>
                <div className="sList">
                    <div className="sponsorsList1">
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                    </div>
                    <div className="sponsorsList2">
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                        <img src={adiddas} alt="" className='box'/>
                    </div>
                </div>
            </div>
        </>
    )
};

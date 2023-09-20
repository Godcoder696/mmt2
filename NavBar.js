
import navBarCss from "./css/navBarCss.css";
import MomentumLogo_2023 from './images/MomentumLogo_2023.png'
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';
export default function NavBar(params) {
    return(
        <>
            <nav data-aos="fade-down">
                <img src={MomentumLogo_2023} alt="MMT_Logo_2023" className="mmtLogo" data-aos="fade-down"/>
                <div className="menu">
                    <div className="ele" data-aos-delay="600" data-aos="fade-right">ABOUT</div>
                    <div className="ele" data-aos-delay="700" data-aos="fade-right">EVENTS</div>
                    <div className="ele" data-aos-delay="800" data-aos="fade-right">SPONSORS</div>
                    <div className="ele" data-aos-delay="900" data-aos="fade-right">FAQs</div>
                </div>
                <div className="socials">
                    <img src={instagram} alt="instagram" className="social" data-aos-delay="700" data-aos="zoom-out"/>
                    <img src={linkedin} alt="linkedin" className="social" data-aos-delay="900" data-aos="zoom-out"/>
                    <img src={twitter} alt="twitter" className="social" data-aos-delay="1100" data-aos="zoom-out"/>
                </div>
                <div className="homePageButtons">

                </div>
            </nav>
        </>
    )
};

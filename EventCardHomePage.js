import eventCardCss from './css/eventCardCss.css';
import video1 from './video/video1.mp4'

export default function EventCardHomePage(params) {
    let videoURL= params.videoUrl;
    let data_aos=params.data_aos;

    return(
        <>
            <div className="eventCard" data-aos={data_aos}>
                <video src={videoURL} className='video1' autoPlay muted loop></video>
                <div className="eventDescriptionHomepage">
                    <div className="smallHead" data-aos="fade-down">
                        Night Event
                    </div>
                    <div className="mediumHead" data-aos="fade-down">
                        DJ NIGHT
                    </div>
                    <div className="c" data-aos="fade-down">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, neque!
                    </div>
                </div>
            </div>
        </>
    )
};

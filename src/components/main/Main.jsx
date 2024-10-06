import "./Main.css";
import {EarthContainer} from "../../components/Earth/EarthContainer";
import AIphoto from "../../assets/askAIphoto.jpg";

export default function Main() {
    return (
        <div className="Main">
            <div className="Main__slider">
                <div className="Main__slider__text"><span className="heading">FORF</span> is a user-friendly application for farmers to monitor agricultural changes throughout the world. </div>
            </div>
            <div className="Main__info--boxes">
                <div className="info-box">
                    <div className="info-box__header">Save your effort</div>
                    <div className="info-box__text">Easily approach to find information about humanity, precipitation, temperature, cloudiness. </div>
                    <div className="info-box__images info-box__images--with-lines">
                        <img className="info-box__image--medium"
                             src="https://www.davidhechler.com/wp-content/uploads/2016/07/500x500-dummy-image.jpg"/>
                        <div className="Line">
                            <svg width="504" height="377" viewBox="0 0 504 377" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.875336 1C116.047 178.56 229.86 259.206 503.309 376.003" stroke="white"/>
                            </svg>
                        </div>
                        <div className="Line">
                            <svg width="504" height="377" viewBox="0 0 504 377" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.875336 1C116.047 178.56 229.86 259.206 503.309 376.003" stroke="white"/>
                            </svg>
                        </div>
                        <div className="Line">
                            <svg width="504" height="377" viewBox="0 0 504 377" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.875336 1C116.047 178.56 229.86 259.206 503.309 376.003" stroke="white"/>
                            </svg>
                        </div>
                        <div className="Line">
                            <svg width="504" height="377" viewBox="0 0 504 377" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.875336 1C116.047 178.56 229.86 259.206 503.309 376.003" stroke="white"/>
                            </svg>
                        </div>
                        <div className="Line">
                            <svg width="504" height="377" viewBox="0 0 504 377" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.875336 1C116.047 178.56 229.86 259.206 503.309 376.003" stroke="white"/>
                            </svg>
                        </div>
                        <div className="Line">
                            <svg width="504" height="377" viewBox="0 0 504 377" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.875336 1C116.047 178.56 229.86 259.206 503.309 376.003" stroke="white"/>
                            </svg>
                        </div>
                        <div className="Line">
                            <svg width="504" height="377" viewBox="0 0 504 377" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.875336 1C116.047 178.56 229.86 259.206 503.309 376.003" stroke="white"/>
                            </svg>
                        </div>

                        <img className="info-box__image--medium"
                             src={AIphoto}/>
                    </div> 
                </div>
                <div className="info-box ai-box">
                    <div className="info-box__header">Ask AI for advice</div>
                    <div className="info-box__text">Need some help to understand the data better? Ask Dr. Farmer to
                        break down information that concers you.
                    </div>
                    <div className="info-box__images">
                        <img className="info-box__image--large" src={AIphoto}/>
                    </div>
                    <div className="Blue-sphere"></div>
                </div>
                <div className="info-box">
                    <div className="Earth--with-text">
                        <div className="text">
                            <div className="info-box__header">Save our planet</div>
                            <div className="info-box__text">
                                Our project is hugely influential towards our planet.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam a lectus nibh. Proin vehicula nibh orci, vel
                                commodo est ultrices nec. Donec in lectus tempor, dapibus lectus eget, tempor eros.
                                Quisque eget dictum elit. Duis odio mi, pulvinar efficitur nulla in, viverra maximus
                                neque. Donec vel augue porttitor, pharetra lacus vel, maximus massa. Pellentesque luctus
                                turpis id enim scelerisque, vel posuere massa dignissim. Sed scelerisque velit lectus,
                                laoreet tincidunt lorem blandit eget. Cras a egestas neque. Maecenas dui dui, facilisis
                                non fringilla eget, dapibus quis odio. Etiam pretium venenatis nisl in mollis. Donec
                                viverra placerat erat, et fringilla libero fringilla.
                            </div>
                        </div>
                        <div className="planet-container">
                            <EarthContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
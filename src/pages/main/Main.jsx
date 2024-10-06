import "./Main.css";
import {EarthContainer} from "../../components/Earth/EarthContainer";
import PhotoCards from "../../assets/get_info_easily.png"
import Statistics from "../../assets/get_info_easily_2.jpg"
import PhotoAI from "../../assets/AI.jpg"


export default function Main() {
    return (
        <div className="Main">
            <div className="Main__slider">
                <div className="Main__slider__text"><span className="heading">FORF</span> is a user-friendly application for farmers to monitor agricultural changes throughout the world. </div>
            </div>
            <div className="Main__info--boxes">
                <div className="info-box">
                    <div className="info-box__header">Save your effort</div>
                    <div className="info-box__text">Easily approach to find information about humidity, precipitation, temperature, cloudiness. </div>
                    <div className="info-box__images info-box__images--with-lines">
                        <img style={{objectFit:"cover", border: 'solid 4px #0032A0'}} className="info-box__image--medium"
                             src={PhotoCards}/>
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

                        <img style={{objectFit:"cover", border: 'solid 4px #0032A0'}}  className="info-box__image--medium"
                             src={Statistics}/>
                    </div>
                </div>
                <div className="info-box ai-box">
                    <div className="info-box__header">Ask AI for advice</div>
                    <div className="info-box__text">Need some help to understand the data better? Ask Mr. Farmer to
                        break down information concerned you
                    </div>
                    <div className="info-box__images">
                        <img style={{objectFit:"cover", border: 'solid 4px #0032A0'}} className="info-box__image--large"
                             src={PhotoAI}/>
                    </div>
                    <div className="Blue-sphere"></div>
                </div>
                <div className="info-box">
                    <div className="Earth--with-text">
                        <div className="text">
                            <div className="info-box__header">Save our planet</div>
                            <div className="info-box__text">
                            Our project is hugely influential towards our planet. By providing farmers with real-time weather and water data, we empower them to make informed decisions that not only enhance their agricultural practices but also promote sustainable land use. Access to accurate weather forecasts helps farmers plan planting and harvesting schedules, reducing the risk of crop failure due to unforeseen weather events.

<p>Moreover, our water data enables farmers to optimize irrigation practices, conserving precious water resources and minimizing waste. This efficient water usage is critical in combating droughts and ensuring that we maintain healthy ecosystems. By promoting practices such as precision agriculture, our project encourages the use of data-driven techniques that reduce the need for chemical fertilizers and pesticides, leading to healthier soil and improved biodiversity.</p>
<p>As farmers adopt these sustainable practices, they contribute to carbon sequestration, reducing greenhouse gas emissions and combating climate change. Additionally, by fostering resilient agricultural communities, our project helps ensure food security for future generations, ultimately supporting both local economies and global sustainability efforts. Together, we can cultivate a greener future, benefiting not just farmers but the entire planet.



</p>                            </div>
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
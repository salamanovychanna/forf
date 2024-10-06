import { useNavigate } from "react-router-dom";
import WeatherApp from '../Map/Map'

const Humidity = () => {
    const navigate = useNavigate()
    return (
        <div style={{maxWidth: '1080px', width: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                <div >
                    <svg onClick={()=>navigate('/dashboard')} width="56" height="41" viewBox="0 0 56 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56 20.5L1 20.5M1 20.5L17.9778 40M1 20.5L17.9778 0.999999" stroke="white" />
                    </svg>
                    <h1>Humidity</h1>
                    </div>
                    <div className="CardsTitle--right">
                        <div className="ListDataTitle">data:</div>
                        <div className="ListData">22/09/01</div>
                    </div>
                </div>
                <div style={{display: 'flex'}}><span style={{fontSize: '96px', marginRight: '30px', fontFamily: '"Orbitron", sans-serif'}}>70%</span>
                <p style={{width: '400px'}}>*When humidity is over 65% it means it is on its the highest level. At this time lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget vestibulum neque, id venenatis lorem. Aenean faucibus nibh vitae tempus cursus.read about humadity on tips page</p></div>
                <p>75% Relative Humidity<br/>
                    Dew Point: 17°C<br/>
                    Absolute Humidity: 12.5 g/m³<br/>
                    Humidity Ratio: 9.5 g/kg<br/>
                    Humidity Index: 22.0°C<br/>
                    Pressure: 15.5 hPa</p>
                <WeatherApp/>
        </div>
    );
};

export default Humidity;
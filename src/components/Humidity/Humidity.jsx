import { useNavigate } from "react-router-dom";

const Humidity = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div onClick={()=>navigate('/dashboard')}>
                <svg width="56" height="41" viewBox="0 0 56 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56 20.5L1 20.5M1 20.5L17.9778 40M1 20.5L17.9778 0.999999" stroke="white" />
                </svg>
                <h1>Humidity</h1></div>
        </div>
    );
};

export default Humidity;
import { useNavigate } from "react-router-dom";
import "./Card.css";


export function Card({title, text1, text2, text3, text4}) {
    const navigate = useNavigate()
    console.log(title)
    return (
        <div className="Card">
            <div className="Card__title">{title}</div>
            <div className="Card__info">
                <div className="Card__text">{text1}</div>
                <div className="Card__text">{text2}</div>
                <div className="Card__text">{text3}</div>
                <div className="Card__text">{text4}</div>
            </div>
            <div onClick={() => navigate('/dashboard/humidity')} className="Card__footer">read in detail&rarr;</div>
        </div>
    )
}
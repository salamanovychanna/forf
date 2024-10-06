import {useState} from "react";
import './CardsList.css';
import {Card} from "./Card/Card";
import Modal from "../Modal/Modal"

export function CardsList() {

    const [cards, setCards] = useState([
        {name: 'Humidity',
        title1: 'Test',
        title2: 'Test',
        title3: 'Test',},
        {name: 'Humidity',
            title1: 'Test',
            title2: 'Test',
            title3: 'Test',},
        {name: 'Humidity',
            title1: 'Test',
            title2: 'Test',
            title3: 'Test',},
        {name: 'Humidity',
            title1: 'Test',
            title2: 'Test',
            title3: 'Test',},
        {name: 'Humidity',
            title1: 'Test',
            title2: 'Test',
            title3: 'Test',},
        {name: 'Humidity',
            title1: 'Test',
            title2: 'Test',
            title3: 'Test',},
        {name: 'Humidity',
            title1: 'Test',
            title2: 'Test',
            title3: 'Test',}
    ]);

    const list = cards.map((card) => {
       return <Card name={card.name} title1={card.title1} title2={card.title2} title3={card.title3}/>
    });

    return (
        <div className="CardsListContainer">
            <div className="CardsTitle">
                <div className="CardsTitle--left">
                    <svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.9994 0C5.83146 0 0 5.76061 0 12.8406C0 19.6558 11.7946 35.5784 12.2968 36.2526L12.7655 36.8827C12.8203 36.9567 12.9076 37 12.9994 37C13.0927 37 13.1794 36.9567 13.2348 36.8827L13.7032 36.2526C14.2057 35.5784 26 19.6558 26 12.8406C26 5.76061 20.1676 0 12.9994 0ZM12.9994 8.24115C15.5677 8.24115 17.6562 10.304 17.6562 12.8406C17.6562 15.376 15.5676 17.4401 12.9994 17.4401C10.4326 17.4401 8.34269 15.376 8.34269 12.8406C8.34269 10.304 10.4325 8.24115 12.9994 8.24115Z"
                            fill="white"/>
                    </svg>
                    <div className="CardsTitleText"><span>Chernivtsi</span> - isn’t right?</div>
                    <Modal/>
                </div>
                <div className="CardsTitle--right">
                    <div className="ListDataTitle">data:</div>
                    <div className="ListData">22/09/01</div>
                </div>
            </div>
            <div className="CardsList">
                {list}
            </div>
        </div>
    )

}
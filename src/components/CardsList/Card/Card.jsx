import "./Card.css";


export function Card({name, title1, title2, title3}) {
    return (
        <div className="Card">
            <div className="Card__title">{name}</div>
            <div className="Card__info">
                <div className="Card__text">{title1}</div>
                <div className="Card__text">{title2}</div>
                <div className="Card__text">{title3}</div>
            </div>
            <div className="Card__footer">read in detail&rarr;</div>
        </div>
    )
}
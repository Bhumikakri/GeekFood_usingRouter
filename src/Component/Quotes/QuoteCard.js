import './quote.css';

const Card = (props) =>{
    return(
        <>
        <div className="cardsContainer">
            <h2>{props.cotation}</h2>
            <p>{props.name}</p>
        </div>
        </>
    )
}

export default Card;
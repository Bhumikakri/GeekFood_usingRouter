import './restrocard.css';

const RestroCard=(props) =>{
    // console.log(props);
    let arr=[];
    for(let i=0;i<props.rating;i++){
        arr.push(<i class="fa-solid fa-star"></i>)
    }
    return(
        <>
    <div className="RestroCard">
        <div className='upperPart'>
        <div className="heading">
        <h3>{props.name}</h3>
        <div className="rating">{arr}</div>
        </div>
      <div>
        <p className="address">
        <i class="fa-solid fa-location-dot"></i>
          {props.address}, {props["address line 2"]}
        </p>
      </div>
      <div className="post">
        <span>
          {props.outcode} {props.postcode}
        </span>
      </div>
        </div>
    <div className='lowerPart'>
       <div className="links">
        <div>
            <i class="fa-solid fa-utensils"></i>
            {props["type_of_food"]}
        </div>
        <a href={props.URL}>Visit Menu</a>
      </div>
    </div>
    </div>

        </>
    );
}

export default RestroCard;
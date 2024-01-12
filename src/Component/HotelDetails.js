import { useParams } from "react-router-dom";
import hotelsList from "./hotelList";

const HotelDetail = () =>{
    const param= useParams();
    console.log(param);

    const hotelDetailes = hotelsList.find((hotels)=> hotels.id === param.hotelsid) 
    return(
        <>
        <h1>HotelDetail page</h1>
        <div>
            <h1>{hotelDetailes.id}</h1>
            <h4>{hotelDetailes.name}</h4>
        </div>
        </>
    );
}

export default HotelDetail;
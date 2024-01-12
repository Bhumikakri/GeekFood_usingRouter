import { useEffect, useState } from "react";

const Food = () =>{
    const[display,setDisplay] = useState('There was no food available rightnow 🤷‍♀️');

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setDisplay("sorry! 🙁");
        }, 2000);

        return () => clearInterval(intervalId);
    },[])

    return(
        <div style={{width:"100%", height:"400px" ,display:"flex",alignItems:"center", justifyContent:"center",fontFamily:"cursive",fontSize:"1.8rem"}}>
            <h1> {display}</h1>
        </div>
        
    );
}

export default Food;
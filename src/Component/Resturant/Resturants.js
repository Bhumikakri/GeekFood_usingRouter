import React, { useState } from 'react';
import './resturant.css';
import Data from './RestroData.json';
import Card from './RestroCard';

const Resturant = () => {

  const [restroval , setrestroval] = useState('');
  const [rate , setrate] = useState(0);
  const [restoData, setrestoData] = useState([...Data]);



    function restroName(e){
        let filteredData = Data.filter((data)=>{
      return (data.type_of_food.toLowerCase().includes(e.target.value.toLowerCase()))
      })
      setrestroval(e.target.value);
      setrestoData(filteredData);
    }

  return (
    <div className="Resturant">
        <div className='FilterInput'>
            <input type='text' className='name' value={restroval} placeholder='Search resturants...' onChange={restroName}/>
            <span>
            Minimum Rating:
            <input type='number' className='number' value={rate} onChange={(e)=>{setrate(e.target.value);
            let filteredData = Data.filter((data)=>{
              return (data.rating>=e.target.value)
            })
            setrestoData(filteredData);
            }}/>
            </span>
        </div>
        <div className='AllCard'>
          {
            restoData.map((data)=><Card {...data}/>
            )
          }
        </div>
    </div>
  );
};

export default Resturant;
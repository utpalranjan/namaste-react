import React from "react";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";




const Body = () => {
    const [listOfResturants, setListOfResturants] = useState(resList)

    const HighRatedResturant = () => {
        let resList1 = resList.filter((res) => {
           return res.data.data.avgRating > 4
          
         })
         setListOfResturants(resList1);
    }

    return (
      <div className="body">
        <div className="search">
            <button className="filter-btn" onClick={HighRatedResturant}>Top Rated restaurant</button>
        </div>
        <div className="res-container">
          {listOfResturants.map((resturant) => (
            <ResturantCard key={resturant.data.data.id} resData={resturant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;
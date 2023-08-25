import React from "react";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturant, setFilteredResturants] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const HighRatedResturant = () => {
    let resList1 = listOfResturants.filter((res) => {
      return res.info.avgRating > 4.2;
    });
    setListOfResturants(resList1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfResturants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfResturants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <div className="search-bar">
          <input
            type="text"
            className="search"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              let resList2 = listOfResturants.filter((d) => {
                return d.info.name
                  .toLowerCase()
                  .includes(inputValue.toLowerCase());
              });
              setFilteredResturants(resList2);
              console.log(inputValue);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={HighRatedResturant}>
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResturant?.map((resturant) => (
          // console.log(resturant.info,'data check'),
          <ResturantCard key={resturant?.info?.id} resData={resturant?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;

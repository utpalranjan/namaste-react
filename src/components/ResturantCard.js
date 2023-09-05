
import { CDN_URL } from "../utils/constant";
import { RATINGS_IMG } from "../utils/constant";

const ResturantCard = (props) => {
    const { resData } = props;
    console.log(resData,'sadsadsa')
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      deliveryTime,
      costForTwo,
    } = resData;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-img"
          src={
           CDN_URL  +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <p className="res-desc">
          <span>Cusine : </span>
          {cuisines.join(", ")}
        </p>
        <p className="res-desc">
          <span>Ratings : {avgRating} </span>
          <img
            className="img-star"
            src= {RATINGS_IMG}
          />
        </p>
        <p className="res-desc">
          <span>ETA : </span>
          {resData.sla.deliveryTime} minutes
        </p>
        <p className="res-desc">
          <span>Price : </span>
          {costForTwo} 
        </p>
      </div>
    );
  };

  export default ResturantCard;
  
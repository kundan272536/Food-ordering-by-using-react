import restaurantData from "./restaurantData";
const RestaurantCard = props => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
    console.log(resData.length, "Length is here");
    return (
      <div className="res-card">
        <img
          className="res-card-image"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          height={150}
        />
        <div className="res-card-details">
          <h3>
            {name}
          </h3>
          <h4>
            {cuisines.join(",")}
          </h4>
          <h4>
            {avgRating}
          </h4>
          <h4>
            {resData.info.sla.deliveryTime} mins{" "}
          </h4>
        </div>
      </div>
    );
  };
  export default RestaurantCard;
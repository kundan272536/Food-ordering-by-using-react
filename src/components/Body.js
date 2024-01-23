import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";
const Body = () => {
    return (
      <div className="body">
        <div className="search-box">
          <input type="search" placeholder="Search your food..." />
          <button className="search-button">Search</button>
        </div>
  
        <div className="res-container">
          {/* <RestaurantCard resName="Vandana Rasoi" cuisine="Biryani Specialist" review="4.2 Stars" delTime="40 mins" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
               <RestaurantCard resName="Glass Box" cuisine="ChickenSpecialist" review="4.1 Stars" delTime="30 mins" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qo1ypqreeaulytd7cmgr"/>
               <RestaurantCard resName="Vandana Rasoi" cuisine="Biryani Specialist" review="4.2 Stars" delTime="40 mins" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mq1vlwbzjanzdeukja3d"/>
               <RestaurantCard resName="Pal Hotel" cuisine="Dhosa Specialist" review="4.0 Stars" delTime="20 mins" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rv8vzoxlvdb80jwvx21h"/> */}
          {/* <RestaurantCard resData={restaurantData[0]} /> */}
          {restaurantData.map(restaurant =>
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )}
  
          {/* <RestaurantCard/>
               <RestaurantCard/>
               <RestaurantCard/>
               <RestaurantCard/> */}
        </div>
      </div>
    );
  };
  export default Body;
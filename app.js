import React from "react";
import ReactDOM from "react-dom";

const Header = () =>{
    return(
  <div className="header">
    <div className="logo-container">
        <img  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/04/attachment_93742997-e1554228382773.png?auto=format&q=60&fit=max&w=930" height={100} width={100}></img>
    </div>
    <div className="nav-items">
     <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
     </ul>
    </div>
  </div>
  );
  }
const RestaurantCard=(props)=>{
    return(
        <div className="res-card">
            <img className="res-card-image" src={props.img} height={150}/>
        <div className="res-card-details">
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>{props.review}</h4>
        <h4>{props.delTime} </h4>
        </div>
       
        </div>
    );
}

const Body=()=>{
    return(
        <div className="body">
        <div className="search-box">
        <input type="search" placeholder="Search your food..." />
        <button className="search-button" >Search</button>
        </div>
        <div className="res-container">
         <RestaurantCard resName="Vandana Rasoi" cuisine="Biryani Specialist" review="4.2 Stars" delTime="40 mins" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
         <RestaurantCard resName="Glass Box" cuisine="ChickenSpecialist" review="4.1 Stars" delTime="30 mins" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qo1ypqreeaulytd7cmgr"/>
         <RestaurantCard resName="Vandana Rasoi" cuisine="Biryani Specialist" review="4.2 Stars" delTime="40 mins" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mq1vlwbzjanzdeukja3d"/>
         <RestaurantCard resName="Pal Hotel" cuisine="Dhosa Specialist" review="4.0 Stars" delTime="20 mins" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rv8vzoxlvdb80jwvx21h"/>
         <RestaurantCard resName="KFC" cuisine="Fried Chicken Specialist" review="4.5 Stars" delTime="15 mins" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>

        </div>
        </div>
    );
}  
const Footer=()=>{
    return (
        <div>

        </div>
    );
}
const AppLayout = () =>{
  return(
  <div className="apps">
    <Header />
    <Body />
    <Footer/>
  </div>
  );
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

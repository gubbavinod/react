import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () =>{

// Hook is a normal java script functions written by react 

   const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
 
   useEffect(() => {}, []);
    return (
            <div className="body">
                    <button className="filter-btn" onClick = {() => {
                        const filteredList = listOfRestaurants.filter( 
                                rest => rest.data.rating > 4
                        );
                        setlistOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
                    <div className="res-container">
                            {listOfRestaurants.map(resturant => 
                                <RestaurantCard key={resturant.data.id} resData={resturant} />
                            )}
                    </div>
            </div>
    )
}

export default Body;
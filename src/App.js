import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//const heading = React.createElement("h1", {id: "heading"}, "Hello world React!!!");

// react.createElement => Object => HTMLElement(render)

//JSX - HTML like or XML Like syntax

//JSX (transpiled before it reaches the JS) - PARCEL - Babel
/* const parent = React.createElement("div", {id: "parent"}, 
                    [React.createElement("div", {id: "child"}, 
                            [React.createElement("h1", {id: "heading"}, "Hello world React!!!"), 
                            React.createElement("h2", {id: "heading"}, "Hello world React!!!")]),
                    React.createElement("div", {id: "child2"}, 
                            [React.createElement("h1", {id: "heading"}, "Hello world React!!!"), 
                            React.createElement("h2", {id: "heading"}, "Hello world React!!!")])]);
 */
//React Component
 //1. class based component - Old
 //2. functional based component - New


//const Jsxheader = () => (<h1 id = "name" className = "check">Namasthe Java Script</h1>);


//const Stylecard = {
//        backgroundColor: "#f0f0f0"
//};

const resObj = [
        {
          
        id: "1234",
            name: "Tasty Burgers",
            cuisine: "Burgers",
            rating: 4.5,
            delivery_time: "30-45 minutes",
            price_range: "$$",
            location: "123 Main Street",
            distance: "0.5 miles"
          
        },
        {
          
                id: "1235",
                    name: "KFC Burgers",
                    cuisine: "Burgers",
                    rating: 4.5,
                    delivery_time: "30-45 minutes",
                    price_range: "$$",
                    location: "123 Main Street",
                    distance: "0.5 miles"
                  
                }
      ]

      


//const RestaurantCard = (props) => {



const RestaurantCard = (props) => {        
        console.log(props.resData)
        //const {resData} = props.resData;
        //console.log(resData);
        //not using keys (not acceptable <<< index as key <<<<<<<< unique id (best practice)
        
        const {id, name, cuisine, rating, delivery_time} = props.resData;
        console.log(name);
        return (
                <div className="res-card" style={{
                        backgroundColor: "#f0f0f0"}}>
                        <img className= "res-logo" alt="Res Logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tfbnpd65irvhp9iwhbtk" />
                        <h3>{name}</h3>
                        <h3>{cuisine}</h3>
                        <h3>{rating}</h3>
                        <h3>{delivery_time}</h3>
                </div>
        )
    }


//React Functional Component: a function that returns a JSX component
const Applayout = () => {
       return (
        <div className = "app">
                <Header />
                <Body />
                
        </div>
)};

//JSX helps in santising the data received and interpolated 

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxheader); 

//component composition

root.render(<Applayout />);
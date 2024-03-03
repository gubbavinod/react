const RestaurantCard = (props) => {        
    console.log(props.resData)
    //const {resData} = props.resData;
    //console.log(resData);
    //not using keys (not acceptable <<< index as key <<<<<<<< unique id (best practice)
    
    const {id, name, cuisine, rating, delivery_time} = props.resData.data;
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

export default RestaurantCard;
import React from "react";
import ReactDOM from "react-dom/client"
import { resObj } from "./resObj";
import { resList } from "./resList";

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://images-platform.99static.com//s_-2qgRrPZnWUpWIh4NeIu95UCE=/0x0:999x999/fit-in/500x500/99designs-contests-attachments/118/118612/attachment_118612943"  alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestrauntCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, deliveryTime, imgUrl} = props?.resData?.data;
    return (
        <div className="restraunt-card" style={{backgroundColor: '#f0f0f0'}}>
            <div>
                <img className="restraunt-logo" src={imgUrl} alt="res-logo" />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>₹{costForTwo} FOR TWO</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}
const resList = resList;
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restraunt-container">
                {
                    resList.map(restraunt => 
                        <RestrauntCard key={restraunt.data.id} resData={restraunt}/>
                    )
                }
            </div>
        </div>
    )
}


const Applayout = () => {
    return (
        <div className="app">
            <HeaderComponent/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);

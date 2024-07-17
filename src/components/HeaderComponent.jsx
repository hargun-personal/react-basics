import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const HeaderComponent = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnline();

    useEffect(()=> {
        console.log("Header component called");
    },[btnName])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}  alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : {onlineStatus ? 'Active' : 'Offline'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                </ul>
                <div>
                    <button className="login-btn" onClick={()=>{
                        setBtnName((btnName) => btnName === 'Login' ? 'Logout' : 'Login')
                    }}>{btnName}</button>
                </div>
            </div>
            
        </div>
    )
}

export default HeaderComponent;
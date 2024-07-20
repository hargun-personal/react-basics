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
        <div className="flex justify-between items-center bg-slate-300">
            <div className="logo-container">
                <img className="w-[150]" src={LOGO_URL}  alt="logo" />
            </div>
            <div className="">
                <ul className="flex gap-10 text-lg font-semibold">
                    <li>Online Status : {onlineStatus ? 'Active' : 'Offline'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li>
                        <button className="login-btn" onClick={()=>{
                            setBtnName((btnName) => btnName === 'Login' ? 'Logout' : 'Login')
                            }}>{btnName}
                        </button>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default HeaderComponent;
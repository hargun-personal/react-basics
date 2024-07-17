import { useEffect } from "react";

const ContactUs = () => {
    useEffect(() => {
        const intervalId = setInterval(()=>{
            console.log("Interval Started")
        },1000)

        return () => {
            clearInterval(intervalId);
            console.log("return")
        }
    })
    return (
        <div className="contact">
            <h1>Contact us</h1>
            <p>Reach out to us at contactUs@foodcourt.in</p>
        </div>
    )
}

export default ContactUs;
import { useState, useEffect } from "react";

const useOnline = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener('online', () => {
            setOnlineStatus(true);
        })

        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        })

        return (() => {
            removeEventListener('online', ()=>{});
            removeEventListener('offline', ()=>{});
        })
    }, [])
    return onlineStatus;
}

export default useOnline
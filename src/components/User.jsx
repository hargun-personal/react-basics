import { useState } from "react"

const User = ({name, location}) => {
     const [count, setCount] = useState(0)
    return (
        <div className="user">
            <h1>User Component (Function)</h1>
            <h2>{count}</h2>
            <button onClick={() => {
                
                setCount(count + 1)
            }}>
                Increment Counter
            </button>
            <button onClick={() => {
                if(count === 0) {
                    alert("Counter can't be less than 0")
                    return;
                }
                setCount(count - 1)
            }}>
                Decrement Counter
            </button>
            <h2>{name}</h2>
            <h2>{location}</h2>
        </div>
    )
}

export default User;
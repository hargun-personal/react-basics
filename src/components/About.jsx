import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor Called");

        this.state= {
            count: 0
        }
    }

    componentDidMount() {
        console.log("Parent componentDidMount Called");
        this.intervalId = setInterval(() => {
            console.log(this.state.count);
        }, 1000)
    }

    componentDidUpdate() {
        console.log("Parent componentDidUpdate Called");
    }

    componentWillUnmount() {
        console.log("Parent componentWillUnmount Called");
        clearInterval(this.intervalId);
    }

    render() {
        console.log("Parent render Called");
        return (
            <div className="about">
                <h1>About us</h1>
                <p>We are a building food delivery app using React!</p>

                <h2>{this.state.count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>
                    Increment
                </button>
                {/* <User name="Hargun Singh (function)" location='Pune (function)' /> */}
                {/* <UserClass name="First" location='Amritsar (Class)'/> */}
                {/* <UserClass name="Second" location='Amritsar (Class)'/>
                <UserClass name="Third" location='Amritsar (Class)'/> */}
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div className="about">
//             <h1>About us</h1>
//             <p>We are a building food delivery app using React!</p>
//             <User name="Hargun Singh (function)" location='Pune (function)' />
//             <UserClass name="Hargun Singh (Class)" location='Amritsar (Class)'/>
//         </div>
//     )
// }

export default About;
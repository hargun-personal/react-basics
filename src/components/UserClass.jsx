import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);

        this.state = {
            count: 0
        } 
        console.log(this.props.name,"Child Constructor Called");
    }

    componentDidMount() {
        console.log(this.props.name,"Child componentDidMount Called");
    }
    
    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        console.log(this.props.name,"Child render Called")
        return(
            <div className="user">
                <h1>User Component (Class)</h1>
                <h2>{count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>
                    Increment Count
                </button>
                <button onClick={() => {
                    if(count === 0) {
                        alert("Counter can't be less than 0")
                        return;
                    }
                    this.setState({
                        count: this.state.count - 1
                    })
                }}>
                    Decrement Count
                </button>
                <h2>{name}</h2>
                <h2>{location}</h2>
            </div>
        )
    }
}

export default UserClass;
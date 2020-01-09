import React from "react";

class LogIn extends React.Component {
    constructor() {
        super();

        this.state = {
            page: "login",
            name: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState ({
            name: event.target.value
        });
    }


    render() {
        return (
            <form onSubmit={() => this.props.handlePage(this.state)}>
                <input placeholder="Username" 
                value={this.state.name} 
                onChange={this.handleChange}></input>

                <button type="submit">Log In</button>
            </form>
        );
    }
}


export default LogIn;
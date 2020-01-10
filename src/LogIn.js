import React from "react";
import Button from 'react-bootstrap/Button';

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

                <Button class="btn" variant="primary" type="submit">Log In</Button>
            </form>
        );
    }
}


export default LogIn;
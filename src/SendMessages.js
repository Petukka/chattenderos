import React from "react";
import Chatkit from "@pusher/chatkit-client";


class SendMessages extends React.Component {
    constructor() {
        super();

        this.state = {
            message: "",
            instanceLocator: "v1:us1:25d759b5-8807-45d9-80dd-c3a644cdbf39",
            testToken: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/25d759b5-8807-45d9-80dd-c3a644cdbf39/token",
            room: "f7ddc077-c7bd-44cf-b059-a1ff69550e78",
            name: "Petukka"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.handleKey = this.handleKey.bind(this);
        
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: this.state.instanceLocator,
            userId: this.state.name,
            tokenProvider: new Chatkit.TokenProvider({
                url: this.state.testToken
            })
        });

        chatManager.connect().then(currentUser => {
            this.currentUser = currentUser;
        });
    }

    handleChange (event) {
        this.setState ({
            message: event.target.value
        });
        
    }

    handleSend () {
        console.log(this.props.name + ": " + this.state.message);

        this.currentUser.sendSimpleMessage({
            roomId: this.state.room,
            text: this.props.name + ": " + this.state.message
        });

    }

    handleKey (event) {
        if(event.key === 'Enter'){
            event.preventDefault();
            this.handleSend();
        }
    }


    render() {
        
        return (
            <div>
                <form>
                    <input
                    value={this.state.message} 
                    onChange={this.handleChange} 
                    onKeyDown={this.handleKey}></input>
                    <button type="button" onClick={() =>this.handleSend()}>Send</button>
                </form>
            </div>
        );
    }
}


export default SendMessages;
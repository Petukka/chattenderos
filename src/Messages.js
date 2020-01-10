import React from "react";
import Chatkit from "@pusher/chatkit-client";


class Messages extends React.Component {
    constructor() {
        super();

        this.state = {
            messages: [],
            instanceLocator: "v1:us1:25d759b5-8807-45d9-80dd-c3a644cdbf39",
            testToken: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/25d759b5-8807-45d9-80dd-c3a644cdbf39/token",
            room: "f7ddc077-c7bd-44cf-b059-a1ff69550e78",
            name: "Petukka",
            loader: false
        }
        
    }

    componentDidMount() {
        this.setState({loader: true});

        const chatManager = new Chatkit.ChatManager({
            instanceLocator: this.state.instanceLocator,
            userId: this.state.name,
            tokenProvider: new Chatkit.TokenProvider({
                url: this.state.testToken
            })
        });
        
        chatManager.connect().then(currentUser => {
            currentUser.subscribeToRoom({
                roomId: this.state.room,
                hooks: {
                    onMessage: message => {
                        this.setState({
                            messages: [...this.state.messages, message],
                            loader: false
                        });
                    }
                },
                messageLimit: 0
            });
        })
        
    }


    render() {

        if (this.state.loader === false) {
            return (
                <div>
                    <ul class="list-group">
                        {this.state.messages.map((message) => {
                            return (
                                <li class="list-group-item" key={message.id}>
                                    <div>
                                        <p>{message.text}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            );
        }
        else {
            return(
                <p>No messages</p>
            )
        }
    }
}


export default Messages;
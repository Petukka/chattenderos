import React from "react";

import Messages from "./Messages";
import SendMessages from "./SendMessages";

class ChatPage extends React.Component {
    constructor() {
        super();

        
    }


    render() {
        return (
            <div>
                <Messages />
                <SendMessages name={this.props.name} />
            </div>
        );
    
    }
}


export default ChatPage;
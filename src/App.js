import React from 'react';
import './App.css';


import Header from "./Header";
import LogIn from "./LogIn";
import ChatPage from "./ChatPage";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      page: 'main',
      name: ''
    }

    this.handleEvent = this.handleEvent.bind(this);
  }



  handleEvent(action) {
    this.setState({
        page: action.page,
        name: action.name
    });

  }

  render() {
    if (this.state.page === "main") {
      return (
        <div>
          <Header />
          <LogIn handlePage={this.handleEvent}/>
          
        </div>
      )
    }

    if (this.state.page === "login") {
      return (
        <div>
          <Header />
          <ChatPage name={this.state.name}/>
        </div>
      )
    }
    
  }
}

export default App;

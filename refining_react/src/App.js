import React, {Component, useImperativeHandle} from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    // state
    this.state = {
      users: []
    }
  }

  getUsers() {
    axios('https://api.randomuser.me/?nat=US&results=5').then(response =>
    //console log to check for api call
    // .then(response => console.log(response));
      this.setState({
        users: response.data.results,
      })
    );
  }

  componentWillMount(){
   this.getUsers();
  }

  render() {
    return <div className="App">{this.state.users.map(user => 
      <>
        <h3>{user.name.first} {user.name.last}</h3>
        <p>{user.cell}</p>
        <p>{user.email}</p>
      </>
      )}
    </div>
  };
}

export default App;

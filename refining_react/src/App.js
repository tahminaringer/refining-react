import React, {Component} from 'react';
import axios from 'axios';
import Loading from './loading';

class App extends Component {

  constructor(props) {
    super(props)
    // state
    this.state = {
      users: [],
      loading: false
    };
  }

  getUsers() {
    this.setState({
      loading: true
    })
    axios('https://api.randomuser.me/?nat=US&results=5').then(response =>
    //console log to check for api call
    // .then(response => console.log(response));
      this.setState({
        users: response.data.results,
        loading: false
      })
    );
  }

  componentWillMount(){
   this.getUsers();
  }

  render() {
    return (
    <div className="App">
      {!this.state.loading ? (
        this.state.users.map(user => (
      <div>
        <h3>{user.name.first} {user.name.last}</h3>
        <p>{user.cell}</p>
        <p>{user.email}</p>
        <hr />
      </div>
      ))
      ) : (
      <Loading meassage="Hello!!!" />
      )}
    </div>
    );
  }
}

export default App;

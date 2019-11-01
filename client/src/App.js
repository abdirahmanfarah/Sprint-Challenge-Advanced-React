import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCard from './components/Cards'
 class App extends React.Component {
  constructor() {
    super();
      this.state = {
        data: []
      }
  }
  
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({
          data: res.data
        });
        console.log(res.data) ///delete this later
      })
      .catch(err => console.log(`Error`, err))
  }
  render() {
     return (
      <div className="App">
       <h1>World Cup Players</h1>
       
       <div className="Main">
        <PlayerCard data={this.state.data}/>
       </div>
      </div>
    );
  }
}

export default App;

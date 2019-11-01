import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCard from './components/Cards'
import DarkMode from './components/Darkmode'
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
      })
      .catch(err => console.log(`Error`, err))
  }
  render() {
     return (
     <div className = 'body'>
        <div className="App">
         <h1>World Cup Players</h1>
         <DarkMode />
         <div className="Main">
           <h2>From Most-Searched to Least Searched</h2>
          <PlayerCard data={this.state.data}/>
         </div>
        </div>
     </div>
    );
  }
}

export default App;

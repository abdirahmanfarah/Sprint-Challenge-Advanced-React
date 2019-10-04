import React from 'react';
import './App.css';
import DarkMode from './component/Darkmode'

import axios from 'axios';


class App extends React.Component {

  constructor(){
    super();
      this.state = {
        playerData: []
      }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({
          playerData:res.data
        });
        console.log(res.data)
      })
      .catch(err =>  console.log('No Data Found:', err))
  }

  render(){

    return (
    <div className='body'>
      <div className="App">
          <header className="App-header">
            <h1>Top Most Searched World Cup Names</h1>
            <DarkMode />
          </header>
          <div className='wrapper'>
  
            {this.state.playerData.map(player => (
              <div className='player-cards'>
  
              <p>Name: {player.name} </p>
  
              <p>Country: {player.country}</p>
  
              <p>Searches: {player.searches}</p> 
  
              </div>
                ))}
        </div>
        </div>
      </div>
    );
  }
}

export default App;


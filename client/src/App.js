import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './components/PlayerCards'

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
      .then( res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => console.log('Error', err))
  }

  render() {
    return (
      <div className = 'container'>
        <div className='wrapper'>
          <h1>Athletes</h1>
          <div className="container-body">
            <h2> List of Athletes</h2>
            <Card data={this.state.data} />
          </div>
        </div>

      </div>
    )
  }
}



export default App;

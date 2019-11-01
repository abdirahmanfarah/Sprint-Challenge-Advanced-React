import React from 'react';

const PlayerCard = props => {
  console.log(props);
  return (
    <div className="player-cards">
    {props.data.map(player => (

      <div className="players" key={player.id}>
        <h3> {player.name} </h3>
        <p> Country: {player.country} </p>
        <p> Number of Searches: {player.searches} </p>
      </div>
  ))}

    </div>
  )
}
export default PlayerCard;
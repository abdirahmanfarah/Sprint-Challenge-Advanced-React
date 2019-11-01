import React from 'react';

const PlayerCard = props => {
  console.log(props);
  return (
    <div className="player-cards">
    {props.data.map(player => (

      <div className="players">
        <h3 key={player.id}> {player.name} </h3>
        <p> {player.country} </p>
        <p> {player.searches} </p>
      </div>
  ))}

    </div>
  )
}
export default PlayerCard;
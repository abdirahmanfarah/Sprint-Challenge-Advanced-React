import React from 'react';

const Card = props => {
  return (
    <div className='cards'>

      {props.data.map(item => (
        <div className="players" key={item.id}>
          <h3> {item.name} </h3>
          <p> Country: {item.country} </p>
          <p> Searches: {item.searches}</p>
          </div>
      ))}
    </div>
  )
}
export default Card;
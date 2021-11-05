// Write your Character component here
import React from 'react';

const Character = (props) => {
    const {character} = props;

    return(
        <div className='character-wrapper'>
            <h3>{character.name} </h3>
          <div>
          <p>Geboren: {character.birth_year}</p>
          </div>
            
           
        </div>
       
    )
}

export default Character;
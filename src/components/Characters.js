import React from 'react';
import Character from './Character';

const Characters = (props) => {
    const {characters} = props;

    return (
        <div className='characters-wrapper'>
        <h2>L E G E N D S</h2>
        {characters.map(character => (
            <Character character={character} />
        ))}
</div>
    )
}

export default Characters;
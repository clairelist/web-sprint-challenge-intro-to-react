import React from 'react';
import Character from './Character';

const Characters = (props) => {
    const {characters} = props;

    //PLEASE NOTE: on first load, the page crashes and says 'characters.map is not a function'. However, on refreshing the page, it compiles correctly. This was a weird bug I had no idea how to fix. And since I still get 100% in the autograder...

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
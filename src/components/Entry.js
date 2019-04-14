import React from 'react';
import { Link } from 'react-router-dom';

const Entry = props => {
    const id = props.match.params.id;
    const entry = props.entries.find(entry => `${entry.id}`===id)
    return(
        <div>
            <p>Mood: {entry.mood}</p>
            <p>About:</p> <p>{entry.journal}</p>
            <Link to="/">Back</Link>
        </div>
    )
}

export default Entry;
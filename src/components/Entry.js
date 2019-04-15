import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EntryContainer = styled.div`
    width: 75%;
    max-width: 800px;
    margin: 10px auto;
`

const Mood = styled.span`
    text-transform: capitalize;
`

const Entry = props => {
    const id = props.match.params.id;
    const entry = props.entries.find(entry => `${entry.id}`===id)
    return(
        <EntryContainer>
            <p>Mood: <Mood>{entry.mood}</Mood></p>
            <p>Notes:</p> <p>{entry.journal}</p>
            <Link to="/">Back</Link>
        </EntryContainer>
    )
}

export default Entry;
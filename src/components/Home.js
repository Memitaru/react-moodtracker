import React from 'react';
import styled from 'styled-components';
import MoodBox from './MoodBox/MoodBox';

const BoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    max-width: 800px;
    border: 1px solid black;
    margin: 0 auto;
    min-height: 200px;
`

const Home = props => {
    console.log(props)
    return(
        <>
        <BoxContainer>
            {props.entries.map(entry => {
                return(
                    <MoodBox mood={entry.mood} key={entry.id} />
                )
            })}
        </BoxContainer>
        </>
    )
}

export default Home;
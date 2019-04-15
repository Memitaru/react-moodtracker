import React from 'react';
import styled from 'styled-components';
import MoodBox from './MoodBox/MoodBox';
import './MoodBox/MoodBox.css';

const BoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    max-width: 800px;
    border: 2px solid darkgray;
    margin: 0 auto;
    min-height: 200px;
`

const KeyContainer = styled.div`
    display: flex;
    width: 75%;
    max-width: 800px;
    margin: 10px auto;
    border: 1px solid lightblue;
`

const Box = styled.div`
    width: 25px;
    height: 25px;
    margin: 0;
`
const KeyItem = styled.div`
    width: 100px;
    border: 1px solid black;
    margin: 2px;
    display: flex;
    height: 40px;
    align-items: center;
    padding-left: 8px;
`

const Mood = styled.p`
    text-transform: capitalize;
    padding-left: 10px;
`

const moods = ["happy", "sad", "stressed"]

function linkToEntry(props, entry){
    props.history.push(`/entry/${entry.id}`);
}

const Home = props => {
    console.log(props)
    return(
        <>
        <KeyContainer>
            {moods.map(mood => {
                return(
                    <KeyItem>
                        <Box className={`${mood}`}></Box>
                        <div><Mood>{mood}</Mood></div>
                    </KeyItem>
                )
            })}
        </KeyContainer>
        <BoxContainer>
            {props.entries.map(entry => {
                return(
                    <div onClick={() => linkToEntry(props, entry)}>
                        <MoodBox mood={entry.mood} key={entry.id} journal={entry.journal}/>
                    </div>
                )
            })}
        </BoxContainer>
        </>
    )
}

export default Home;
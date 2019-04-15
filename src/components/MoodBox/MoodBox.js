import React from 'react';
import styled from 'styled-components';
import './MoodBox.css';

const Box = styled.div`
    width: 50px;
    height: 50px;
    margin: 0;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    &:hover{
        border: 2px solid black;
    }
`

const MoodBox = props => {
    console.log(props)
    return(
        <Box className={props.mood}>
            {(props.journal.length>0)? <p>●</p> : null}
        </Box>
    )
}


export default MoodBox;
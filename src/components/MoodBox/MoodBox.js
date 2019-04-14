import React from 'react';
import styled from 'styled-components';
import './MoodBox.css';

const Box = styled.div`
    width: 50px;
    height: 50px;
    margin: 0;
    cursor: pointer;
    box-sizing: border-box;
    &:hover{
        border: 2px solid black;
    }
`

const MoodBox = props => {
    console.log(props)
    return(
        <Box className={props.mood}>

        </Box>
    )
}


export default MoodBox;
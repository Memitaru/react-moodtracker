import React from 'react';
import styled from 'styled-components';
import './MoodBox.css';

const Box = styled.div`
    width: 50px;
    height: 50px;
    margin: 0;
`

const MoodBox = props => {
    console.log(props)
    return(
        <Box className={props.mood}>

        </Box>
    )
}


export default MoodBox;
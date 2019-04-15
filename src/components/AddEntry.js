import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    width: 75%;
    max-width: 800px;
    margin: 10px auto;
`

class AddEntry extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newMood: '',
            newJournal: ''
        }
    }

    handleChange = e => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    render(){
        return(
            <FormContainer>
                <form>
                    <textarea name="newJournal" onChange={this.handleChange} placeholder="Info here" value={this.state.newJournal} />
                </form>
            </FormContainer>
        )
    }
}

export default AddEntry;
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import starterData from './data/data';
import Home from './components/Home'
import Entry from './components/Entry'
import Nav from './components/Nav/Navigation'
import AddEntry from './components/AddEntry';
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {moods: ["happy", "sad", "stressed", "angry", "calm", "ill", "energetic"],
    entries: starterData}
  }

  // componentDidMount(){
  //   this.setState({entries: starterData})
  // }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" render={props => <Home {...props} entries={this.state.entries} moods={this.state.moods}/>} />
        <Route path="/add-entry" render={props => <AddEntry {...props} />}/>
        <Route path="/entry/:id" render={props => <Entry {...props} entries={this.state.entries} />}/>
      </div>
    );
  }
}

export default App;

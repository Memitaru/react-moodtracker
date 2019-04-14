import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import starterData from './data/data';
import Home from './components/Home'
import Entry from './components/Entry'

class App extends Component {
  constructor(){
    super();
    this.state = {entries: starterData}
  }

  // componentDidMount(){
  //   this.setState({entries: starterData})
  // }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Route exact path="/" render={props => <Home {...props} entries={this.state.entries} />} />
        <Route path="/entry/:id" render={props => <Entry {...props} entries={this.state.entries} />}/>
      </div>
    );
  }
}

export default App;

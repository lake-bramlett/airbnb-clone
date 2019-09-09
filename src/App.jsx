import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomeSplash from './components/HomeSplash.jsx';
import HomesList from './components/HomesList.jsx';
import NewHomeForm from './components/NewHomeForm.js';

import Routes from './Routes';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      homesMasterList: []
    }
  }

  addHomeToList = (home) => {

    console.log('second log:' + home);
    let temp = this.state.homesMasterList.slice()
    temp.push(home)
    this.setState({ homesMasterList: temp}, console.log(this.state.homesMasterList))
  }


  render() {
    console.log(this.state.homesMasterList);
    return (
      <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/host/homes" render={()=><HomesList homesList={this.state.homesMasterList}/>} />
          <Route exact path="/" render={() => <HomeSplash homesList={this.state.homesMasterList}/>} />
          <Route exact path="/newhomes" render={()=><NewHomeForm callback={this.addHomeToList}/>} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}


export default App;

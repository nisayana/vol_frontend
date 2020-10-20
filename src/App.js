import React, { Component } from 'react';
import './App.css';
import NotFound from './NotFound'
import HomeContainer from './HomeComponents/HomeContainer'
import Header from './Header'

import { Route, Switch } from 'react-router-dom'

class App extends Component {

  state = {
    user: {},
    organizations: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/organizations`)
    .then(res => res.json())
    .then((arrayOfOrganizations) => {
      this.setState({
        organizations: arrayOfOrganizations
      })
    })
  }



  render() {
    // console.log(this)
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' render={ () => <HomeContainer
        organizations={this.state.organizations}
        />} />
        </Switch>
      </div>
    )
  }
}

export default App;

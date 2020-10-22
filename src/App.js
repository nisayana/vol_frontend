import React, { Component } from 'react'
import './App.css'
import NotFound from './NotFound'
import HomeContainer from './OrgComponents/HomeContainer'
import Header from './Header'
import ListContainer from './OrgComponents/ListContainer'
// import Profile from './HomeComponents/Profile'
import MyListContainer from './HomeComponents/MyListContainer'

// import NavBar from './HomeComponents/NavBar'
// import Signup from './HomeComponents/Signup'
// import Login from './HomeComponents/Login'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends Component {

  state = {
    id: 0,
    user: {},
    organizations: [],
    error: "",
    search: "",
    myLists: [],
    
  }

  componentDidMount() {
    fetch(`http://localhost:3000/organizations`)
    .then(res => res.json())
    .then((arrayOfOrganizations) => {
      this.setState({
        organizations: arrayOfOrganizations
      })
    })

    fetch(`http://localhost:3000/users/1`)
    .then(res => res.json())
    .then((userObj) => {
      this.setState({
        user: userObj,
        myLists: userObj.dash_list_joiners
      })
    })

  //   if(localStorage.token){
  //     fetch(`https://localhost:3000/persist`, {
  //       method: "GET",
  //       headers: {
  //         "Authorization": localStorage.token
  //       }
  //     })
  //     .then(r => r.json())
  //     .then((data) => {
  //       if(data.token){
  //         this.setState({
  //             user: data.user
  //           })
  //         }
  //       })
  //     }
  // }

  // createNewUser = (newUser) => {
  //   this.setState({
  //     user: newUser.user,
  //     token: newUser.token
  //   })
  // }

  // loginUser = (user) => {
  //   fetch('https://localhost:3000/login', {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(user)
  //   })
  //   .then(r => r.json())
  //   .then(userData => {
  //     if(userData.error){
  //       this.setState({
  //         error: userData.error
  //       })
  //     }else{
  //       localStorage.setItem("token", userData.token)
  //       this.setState({
  //         user: userData.user,
  //         search: ""
  //       })
  //     }
  //   })

  }

  renderSpecificOrganization = (routerProps) => {
    console.log("hi from Spec")
    let givenUrl = routerProps.match.params.id 
    let foundOrganization = this.state.organizations.find((organizationPojo) => {
      return organizationPojo.id === parseInt(givenUrl)
    })
    if (foundOrganization) {
        return <ListContainer organization = {foundOrganization} addToMyLists={ this.addToMyLists} />
    } else {
        return <NotFound />
    }
  }

  addToMyLists = myList => {
    fetch("http://localhost:3000/dash_list_joiners", {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify({
        list_id: myList.id,
        user_id: 1
      })
  })
    .then(r => r.json())
    .then(newMyList => {
      this.setState(prevState => ({
        myLists: [...prevState.myLists, newMyList]
      }
      // , console.log("after setState", this.state.myLists)
      )
    )}
  ) 
}

  removeList = id => {
      const updatedList = this.state.myLists.filter(myList => {
        if (myList.id !== id) {
          return true
        } else {
          return false
        }
      })
      this.setState({
        myLists: updatedList
      })
    }

  render() {
    // console.log(this.state.organizations)
    // let organizationId = this.state.organizations.map(organization => organization.id)
    // console.log(organizationId)
    console.log("lists", this.state.myLists)
    console.log("user", this.state.user)
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' render={ () => <HomeContainer
        organizations ={this.state.organizations}
        />} />
          <Route exact path='/my-lists'>
          <MyListContainer myLists={this.state.myLists} removeList={this.removeList} />
           </Route>
          {/* <Route exact path="/profile"> */}
             {/* <Profile myLists={this.state.myLists} removeList={this.removeList} />            */}
          {/* </Route> */}
          <Route path='/organizations/:id/lists' exact render={ this.renderSpecificOrganization } />
          {/* <Route path='/organizations/:id' exact render={ () => <ListContainer addToMyLists={ this.addToMyLists } />} /> */}
          {/* <Route path='/:id' exact render={ () => <ListContainer
          routerProps={this.states.organizations}
          /> }/> */}
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);

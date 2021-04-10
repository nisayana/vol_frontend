import React, {useState, useEffect} from 'react';
import {Link, Switch, Route, Redirect, useHistory} from 'react-router-dom';
import './App.css'
import NotFound from './NotFound'
// import HomeContainer from './OrgComponents/HomeContainer'
import Header from './Header'
import NavBar from './HomeComponents/NavBar'

import ListContainer from './OrgComponents/ListContainer'
// import ProfileContainer from './HomeComponents/ProfileContainer'
// import MyListContainer from './HomeComponents/MyListContainer'
// import RegisterForm from './HomeComponents/RegisterForm'
import LoginForm from './HomeComponents/LoginForm'

// import MapContainer from './OrgComponents/MapContainer'
// import Geocoder from './OrgComponents/Geocoder'

import {connect} from 'react-redux';
import OrganizationContainer from './OrgComponents/OrganizationContainer';
import {setOrgs} from './action_creators/organizations';
import {setLead, setUser} from './action_creators/user';
import {setOrganizationInfo} from './action_creators/organizations'



function App(props) {

  // let [token, setToken] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/organizations")
    .then(res => res.json())
    .then(arrOfOrgs => {
      setOrgs(arrOfOrgs)
    })

    if(localStorage.token){
      fetch('https://localhost:3000/users/persist', {
       method: 'GET',
       headers: {
         "Authorization": localStorage.token
       }
     })
     .then(res=>res.json())
     .then(res => {
       if(res.role === 'Organization') {
        setLead(res)
       } else {
        setUser(res)
       }
     })
   }
  }, [])



  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path='/'> 
          <OrganizationContainer />
        </Route>
        <Route path='/organizations/:id/lists'>
          <ListContainer/>
        </Route>
        <Route path="/login" component={LoginForm} /> 

      </Switch>
    </div>
  )
}

let mapStateToProps = (globalState) => {
  // console.log(globalState)
  return {
    organizations: globalState.organizations,
    username: globalState.username,
    leadname: globalState.leadname
    // token: globalState.token,
    // error: globalState.error
  }
}

export default connect(mapStateToProps)(App);
 
// class App extends Component {

//   state = {
//     id: 0,
//     user: {},
//     organizations: [],
//     error: "",
//     search: "",
//     myLists: [],
    
//   }

//   componentDidMount() {
//     fetch(`http://localhost:3000/organizations`)
//     .then(res => res.json())
//     .then((arrayOfOrganizations) => {
//       this.setState({
//         organizations: arrayOfOrganizations
//       })
//     })

//     fetch(`http://localhost:3000/users/1`)
//     .then(res => res.json())
//     .then((userObj) => {
//       this.setState({
//         user: userObj,
//         myLists: userObj.dash_list_joiners
//       })
//     })

//     if(localStorage.token){
//       fetch(`https://localhost:3000/persist`, {
//         method: "GET",
//         headers: {
//           "Authorization": localStorage.token
//         }
//       })
//       .then(res => res.json())
//       .then(this.helpHandleResponse)
//       }
//     }

//     handleLogOut = () => {
//       this.setState({
//         id: 0,
//         name: "",
//         token: ""
//       })
//       localStorage.clear()
//     }

//     handleLoginSubmit = (userInfo) => {
//       console.log("Login form has been submitted")

//       fetch('http://localhost:3000/login', {
//         method: "POST", 
//         headers: {
//           "Content-Type": "Application/json"
//         },
//         body: JSON.stringify({
//           name: userInfo.name,
//           password: userInfo.password
//         })
//       })
//       .then(res => res.json())
//       .then(this.helpHandleResponse)
//     }

//     handleRegisterSubmit = (userInfo) => {
//       console.log("Register form has been submitted")

//     fetch('http://localhost:3000/users', {
//       method: "POST",
//       headers: {
//         "Content-Type": "Application/json"
//       },
//       body: JSON.stringify({
//         name: userInfo.name,
//         password: userInfo.password,
//         // age: userInfo.age
//       })
//     })
//     .then(res => res.json())
//     .then(this.helpHandleResponse)
//     }

//     helpHandleResponse = (resp) => {
//       if(resp.error){
//         console.error(resp.error)
//       } else {
//         localStorage.token = resp.token
//         this.setState({
//           id: resp.user.id,
//           name: resp.user.name,
//           myLists: resp.user.myLists,
//           token: resp.token
//         })
//         this.props.history.push("/profile")
//       }
//     }

//     renderForm = (routerProps) => {
//       if(this.state.token){
//         return <button onClick={this.handleLogOut}>Log Out</button>
//       }
      
//       if(routerProps.location.pathname === "/login"){
//         return <Form
//           formName="Login Form"
//           handleSubmit={this.handleLoginSubmit}
//         />
//       } else if (routerProps.location.pathname === "/register") {
//         return <Form
//           formName="Register Form"
//           handleSubmit={this.handleRegisterSubmit}
//         />
//       }
//     }

//     renderProfile = (routerProps) => {
//       if(this.state.token){
//         return <ProfileContainer 
//           name={this.state.name} 
//           myLists={this.state.myLists} 
//           id={this.state.id}
//           token={this.state.token}
//         />
//       } else {
//         return <Redirect to="/login" />
//       }
//   }

//   renderSpecificOrganization = (routerProps) => {
//     console.log("hi from Spec")
//     let givenUrl = routerProps.match.params.id 
//     let foundOrganization = this.state.organizations.find((organizationPojo) => {
//       return organizationPojo.id === parseInt(givenUrl)
//     })
//     if (foundOrganization) {
//         return <ListContainer organization = {foundOrganization} addToMyLists={ this.addToMyLists} />
//     } else {
//         return <NotFound />
//     }
//   }

//   addToMyLists = myList => {
//     fetch('http://localhost:3000/dash_list_joiners', {
//       method: "POST",
//       headers: {
//       "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         list_id: myList.id,
//         user_id: 1
//       })
//   })
//     .then(r => r.json())
//     .then(newMyList => {
//       this.setState(prevState => ({
//         myLists: [...prevState.myLists, newMyList]
//       }
//       // , console.log("after setState", this.state.myLists)
//       )
//     )}
//   ) 
// }

//   removeList = id => {
//       // console.log("Remove list")
//       fetch(`http://localhost:3000/dash_list_joiners/${id}`, {
//         method: "DELETE"
//       })
//       .then(res => res.json())
//       .then(removedList => {
//         let updatedList = this.state.myLists.filter(list => list.id !== removedList.list.id)
//         this.setState({
//           ...this.state,
//           myLists: updatedList
//         })
//       })
//     }
     

//   render() {
//     // console.log(this.state.organizations)
//     // let organizationId = this.state.organizations.map(organization => organization.id)
//     // console.log(organizationId)
//     // console.log("lists", this.state.myLists)
//     // console.log("user", this.state.user)
//     return (
//       <div className="App">
//         <Header/>
//         <NavBar/>
//         <Switch>
//           <Route path="/map" component={Geocoder}/>
//           <Route exact path='/' render={ () => <HomeContainer
//         organizations ={this.state.organizations}
//         />} />
//           <Route path="/login" render={ this.renderForm } /> 
//           <Route path="/register" render={ this.renderForm } /> 
//           <Route path="/profile" render={ this.renderProfile } />
//           <Route exact path='/my-lists'>
//             <MyListContainer myLists={this.state.myLists} removeList={this.removeList} />
//            </Route>
//           <Route path='/organizations/:id/lists' exact render={ this.renderSpecificOrganization } />
//         </Switch>
//       </div>
//     )
//   }
// }


// export default withRouter(App)

import React, { Component } from 'react';
import MyList from './MyList'
import MyListContainer from './MyListContainer'

class Profile extends Component {

    render(){
        console.log(this.props)
        return(
            <div>Hello from Profile</div>
        )
    } 
}

export default Profile;
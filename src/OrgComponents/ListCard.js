import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addList} from '../action_creators/user'

import OrganizationContainer from './OrganizationContainer'
// import MapContainer from './MapContainer'

class ListCard extends Component {

    addList = () => {
        // console.log("click me", this.props.list)
        // this.props.addToMyLists(this.props.list)
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
    }


    arrayOfLists = this.props.lists.map(list => {
        return (<li key={list.id}> 
        <h1>{list.name} </h1>
        <h2>{list.description}</h2>
        <h2>Location: {list.location}</h2>
        <button className="add" onClick = {this.addList}><span>Add To My List</span></button> 

        {/* <MapContainer lng={list.lng} lat={list.lat}/> */}
        </li>)
    })
    // arrayOfLists = this.props.organization.lists.map((list) => {
    //         // console.log(category)
    //         return <ListCard 
    //                 key = {list.id}
    //                 list = {list}
    //                 addToMyLists = {this.props.addToMyLists}
    //                 // organization_id ={organization.id}
    //                 />
    //     })

    render() {

        console.log(this.props.lists)

        
        return (
            <div >
                {this.arrayOfLists}
            </div>
        )
    }
}

export default ListCard;

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
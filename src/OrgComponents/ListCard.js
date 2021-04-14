import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import {addList, setUser} from '../action_creators/user'

import OrganizationContainer from './OrganizationContainer'

const ListCard = (props) => {

  const {id} = useSelector(globalState => globalState.userReducer)

  console.log(id)

  const addToMyList = (list_id) => {
        // console.log("click me", this.props)
        // this.props.addToMyLists(this.props.list)
        fetch('http://localhost:3000/dash_list_joiners', {
          method: "POST",
          headers: {
          "Content-Type": "application/json"
          },
          body: JSON.stringify({
            list_id: list_id,
            user_id: id
          })
      })
        .then(res => res.json())
        .then(myList => {
          // addList(myList)
          console.log(myList)
          // this.setState(prevState => ({
          //   myLists: [...prevState.myLists, newMyList]
          // })
          // , console.log("after setState", this.state.myLists)
        })
    }


  const arrayOfLists = props.lists.map(list => {
        return (<li key={list.id}> 
        <h2>{list.name} </h2>
        <h3>{list.description}</h3>
        <h3>Location: {list.location}</h3>
        <button className="add" onClick = {()=> addToMyList(list.id)}><span>Add To My List</span></button> 
        </li>)
    })

        
        return (
            <div >
                {arrayOfLists}
            </div>
        )
}

export default ListCard;

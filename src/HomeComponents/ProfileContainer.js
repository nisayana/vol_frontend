import React, { Component } from 'react';
import {connect, useSelector} from 'react-redux';

const Profile = (props) => {

    const {dash_list_joiners} =  useSelector(globalState => globalState.userReducer.userInfo)

    // UPDATE PROFILE 

    return(
        <div>
            <ul>
                {dash_list_joiners === undefined ?
                <h2>Loading...</h2>
                :
                dash_list_joiners.map(opportList => {
                    return (<li key={opportList.id}>
                        <h2>{opportList.list.name} </h2>
                        <h3>{opportList.list.description}</h3>
                        <h3>Location: {opportList.list.location}</h3>
                        <h3>Date: {opportList.list.date}</h3>
                    </li>)
                })
                }   
            </ul>
        </div>
    )
}

export default Profile;
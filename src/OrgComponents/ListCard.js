import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'

import OrganizationContainer from './OrganizationContainer'
// import MapContainer from './MapContainer'

class ListCard extends Component {

    handleAddToMyList = () => {
        // console.log("click me", this.props.list)
        // this.props.addToMyLists(this.props.list)
        console.log("hello")
    }


    arrayOfLists = this.props.lists.map(list => {
        return (<li key={list.id}> 
        <h1>{list.name} </h1>
        <h2>{list.description}</h2>
        <h2>Location: {list.location}</h2>
        <button className="add" onClick = {this.handleAddToMyList}><span>Add To My List</span></button> 

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
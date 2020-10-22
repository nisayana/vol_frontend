import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'

// import OrganizationContainer from './OrganizationContainer'

class ListCard extends Component {

    handleAddToMyList = () => {
        console.log("click me", this.props.list)
        this.props.addToMyLists(this.props.list)
    }

    render() {
        // console.log(this.props)
        let {name, description, location, addToMyLists } = this.props.list
        

        return (
            <div >
                <li>
                <h1>{name}</h1>
                <h2>{description}</h2>
                <h2>Location: {location}</h2>
                <button className="add" onClick = {this.handleAddToMyList}><span>Add To My List</span></button>
                </li>
            </div>
        )
    }
}

export default ListCard;
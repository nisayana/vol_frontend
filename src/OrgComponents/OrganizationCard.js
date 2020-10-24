import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class OrganizationCard extends Component {

    // state={
    //     showDescription: false
    // }

    // handleClick = (evt) => {
    //     this.setState({
    //         showDescription: !this.state.showDescription
    //     })
    // }

    handleClick = () => {
        //this.props.categoryCard.organizations
    }

    render() {
        // console.log(this.props.organizationCard.description)
        let {name, image, description, id } = this.props.organizationCard
        
        console.log("hi from card")
        return (
            <div className="card"> 
                <Link to={`/organizations/${id}/lists`}>            
                    <h2>{this.props.organizationCard.name}</h2>
                <img src={image} alt={this.props.organizationCard.name} onClick={this.handleClick} className="organization-image"/>
                </Link> 
            </div>
        )
    }
}

export default OrganizationCard;
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'

const OrganizationCard = (props) => {
    // console.log(props.organization)

    // state={
    //     showDescription: false
    // }

    // handleClick = (evt) => {
    //     this.setState({
    //         showDescription: !this.state.showDescription
    //     })
    // }

    let handleClick = () => {
        //this.props.categoryCard.organizations
    }
        // console.log(this.props.organizationCard.description)
    let {name, image, description, id } = props.organization
        
    return (
        <div className="card"> 
            <Link to={`/organizations/${id}/lists`}>            
                <h2>{name}</h2>
                <img src={image} alt={name} onClick={handleClick} className="organization-image"/>
            </Link> 
        </div>
    )
}

export default OrganizationCard;
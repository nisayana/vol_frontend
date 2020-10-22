import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import OrganizationContainer from './OrganizationContainer'

class CategoryCard extends Component {

    // let showOrganizations = this.props
    // state={
    //     showDescription: false
    // }

    handleClick = () => {
        //this.props.categoryCard.organizations
    }

    render() {
        console.log(this.props)
        let {name, image, id } = this.props.categoryCard
        // let arrayOfLists = this.props.categoryCard.specificLists.map((listObj) => {
        //     return <ListCard listCard={listObj}/>
        // })

        return (
            <div className="card">
                <Link to={`/category/${id}`}>            
                    <h2>{this.props.categoryCard.name}</h2>
                <img src={image} alt={this.props.categoryCard.name} onClick={this.handleClick} className="category-image"/>
                </Link> 
            </div>
        )
    }
}

export default CategoryCard;
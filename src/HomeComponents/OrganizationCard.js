import React, { Component } from 'react'

class OrganizationCard extends Component {

    state={
        showDescription: false
    }

    handleClick = (evt) => {
        this.setState({
            showDescription: !this.state.showDescription
        })
    }

    render() {
        // console.log(this.props.organizationCard.description)
        let image = this.props.organizationCard.image
        let name = this.props.organizationCard.name
        let description = this.props.organizationCard.description

        return (
            <div className="card">
                <h2>{this.props.organizationCard.name}</h2>
                <img src={image} alt={this.props.organizationCard.name} onClick={this.handleClick} className="organization-image"/>

                { this.state.showDescription ?
                    <div>
                        <p> Description: {this.props.organizationCard.description}</p>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default OrganizationCard;
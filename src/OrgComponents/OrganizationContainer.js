import React, { Component } from 'react'
import OrganizationCard from './OrganizationCard'
import {Link} from 'react-router-dom'
// import { Card } from 'semantic-ui-react'

class OrganizationContainer extends Component {
    render() {
        console.log(this.props.organizations) 
        let organizationCard = this.props.organizations.map((organizationObj) => {
            return <OrganizationCard organizationCard={organizationObj}/>
        })
        return (
            <div id="organization-collection">
                {organizationCard}
            </div>
        )
    }
}

export default OrganizationContainer
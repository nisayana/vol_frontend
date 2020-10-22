import React, { Component } from 'react';
import OrganizationContainer from './OrganizationContainer'
// import { Image } from 'semantic-ui-react'


class HomeContainer extends Component {

    render() {
        // console.log(this)
        return(
        <div>
            <OrganizationContainer organizations={this.props.organizations} routerProps={this.props.routerProps}/>
        </div>
        )
    }
}

export default HomeContainer
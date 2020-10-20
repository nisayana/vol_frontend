import React, { Component } from 'react';
import OrganizationContainer from './OrganizationContainer';

class HomeContainer extends Component {

    render() {
        // console.log(this.props)
        return(
            <div>
                <OrganizationContainer organizations={this.props.organizations}/>
            </div>
        )
    }
}

export default HomeContainer
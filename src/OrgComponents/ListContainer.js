import React, { Component } from 'react'
import ListCard from './ListCard'
import {connect, useSelector} from 'react-redux'


const ListContainer = (props) => {

    let {organizations} = useSelector(globalState => globalState.orgReducer)
    console.log(props)

    let renderSpecificOrganization = (props) => {
    console.log(props)
    let givenUrl = props.match.params.id 
    let foundOrganization = this.state.organizations.find((organizationPojo) => {
      return organizationPojo.id === parseInt(givenUrl)
    })
    if (foundOrganization) {
        return <ListContainer organization = {foundOrganization} addToMyLists={ this.addToMyLists} />
    } else {
        // return <NotFound />
    }
  }

            
        // let arrayOfLists = this.props.organization.lists.map((list) => {
            // console.log(category)
        //     return <ListCard 
        //             key = {list.id}
        //             list = {list}
        //             addToMyLists = {this.props.addToMyLists}
        //             // organization_id ={organization.id}
        //             />
        // })
    return (
        <div id="list-collection">
            {renderSpecificOrganization()}
                {/* {organizations.map} */}
            <h1>Hello from list container</h1>
        </div>

    )
}


// let mapStateToProps = (globalState) => {
//     console.log(globalState)
//     return {
//         organizations: globalState.organizations
//     }
// }

export default ListContainer
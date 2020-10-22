import React, { Component } from 'react'
import ListCard from './ListCard'

class ListContainer extends Component {


    render() {
        // debugger
        console.log(this.props)
            
        let arrayOfLists = this.props.organization.lists.map((list) => {
            // console.log(category)
            return <ListCard 
                    key = {list.id}
                    list = {list}
                    addToMyLists = {this.props.addToMyLists}
                    // organization_id ={organization.id}
                    />
        })
        return (
            <div id="list-collection">
                {arrayOfLists}
            </div>
        )
    }
}

export default ListContainer;
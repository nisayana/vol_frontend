import React from 'react'

class MyList extends React.Component {

    handleDeletFromMyList = () => {
        // console.log("click me", this.props)
        this.props.removeList(this.props.myList.id)
    }

    render() {
        let {name, description, location, id } = this.props.myList.list
        // console.log("from my LIST", this.props)
        return(
            <div>
                <li>
                <h1>Organization: {name}</h1>
                <h2>Description: {description}</h2>
                <h2>Location: {location}</h2>
                <button className="delete" onClick = {this.handleDeletFromMyList}><span>Delete From My List</span></button>
                </li>
            </div>
        )
    }

}

export default MyList
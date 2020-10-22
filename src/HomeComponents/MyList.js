import React from 'react'

class MyList extends React.Component {

    render() {
        let {name, description, location } = this.props.myList
        // console.log(this.props.myList.list)
        return(
            <div>
                <li>
                <h1>{name}</h1>
                <h2>{description}</h2>
                <h2>Location: {location}</h2>
                </li>
            </div>
        )
    }

}

export default MyList
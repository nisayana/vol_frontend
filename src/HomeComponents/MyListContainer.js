import React from 'react'
import MyList from './MyList'

class MyListContainer extends React.Component {



    render() {
        // console.log("YESSS!", this.props.removeList)
        // let removeList = this.props.removeList
        let savedLists = this.props.myLists.map(myList => {
           return <MyList myList={myList} key={myList.id} removeList={this.props.removeList} />
        })

        return(
            <div>
                {this.props.myLists.length > 0 ? 
                <h1> My lists: </h1> 
                :
                <h2> Loading... </h2>   
                }
                {savedLists}
                {/* {removeList} */}
            </div>
        )
    }

}

export default MyListContainer
import React from 'react'
import MyList from './MyList'

class MyListContainer extends React.Component {



    render() {
        console.log("YESSS!", this.props)

        let savedLists = this.props.myLists.map(myList => {
           return <MyList myList={myList} key={myList.id} />
        })

        return(
            <div>
                {this.props.myLists.length > 0 ? 
                <h1> Here is a list: </h1> 
                :
                <h2> Loading... </h2>   
                }
                {savedLists}
            </div>
        )
    }

}

export default MyListContainer
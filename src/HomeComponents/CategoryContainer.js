import React, { Component } from 'react'
import CategoryCard from './CategoryCard'

class CategoryContainer extends Component {
    render() {
        // console.log(this.props.categories) 
        let arrayOfCategories = this.props.categories.map((categoryObj) => {
            return <CategoryCard categoryCard={categoryObj} key={categoryObj.id}/>
        })
        return (
            <div id="category-collection">
                {arrayOfCategories}
            </div>
        )
    }
}

export default CategoryContainer
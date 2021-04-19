import React, {useState} from 'react'
import OrganizationCard from './OrganizationCard';
// import {Link} from 'react-router-dom'
import {connect, useSelector} from 'react-redux';
import Search from './Search'
// import {filterOrgs} from '../action_creators/organizations'

const OrganizationContainer = (props) => {

    let {organizations} = useSelector(globalState => globalState.orgReducer)

    const [selectedCategory, setSelectedCategory] = useState('Music')

    const changeSelectedCategory = (chosenCategory) => {
        setSelectedCategory(chosenCategory)
    }

    const handleSelectCategory = (selectedCategory) => {
        // switch (selectedCategory) {
        //     case 
        // }
    }

    return(
        <div>
            <Search />
            <div id="org-collection">
                {organizations.map(organization => (<OrganizationCard key={organization.id} organization={organization}/>))}
            </div>
        </div>

    )
}

export default OrganizationContainer;
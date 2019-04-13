import React from 'react'

import Header from './Header'
import Search from './Search'
import SubSearch from './SubSearch'
import PeopleBlock from './PeopleBlock'

class Profile extends React.PureComponent{
    render(){
    return (
        <div className='App'>
        <Header/>
        <Search/>
        <SubSearch/>
        <PeopleBlock/>
        </div>
      )
}
}

export default Profile
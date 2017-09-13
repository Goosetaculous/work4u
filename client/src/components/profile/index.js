import React , { Component } from 'react'
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import ProfileTabs from './tabs/'


class Profile extends Component{
    render(){
        return(
            <div className="container">
                <SideBar/>
                <Wrapper>
                    <div>
                        <ProfileTabs/>
                    </div>

                </Wrapper>
            </div>

        )
    }
}

export default  Profile
import React , { Component } from 'react'

import {Layout} from 'antd'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import Bottom from '../../components/shared/footer'
import Top from '../../components/shared/header'
import Sidebar from '../../components/shared/sider'

const {Header, Sider, Content, Footer} = Layout;

class Alljobs extends Component{
    render(){
        return(
            <div>
                <Layout>
                    <Header>
                        {/* TODO conditional rendering if logged in*/}
                        <Top/>
                        {/* TODO conditional rendering if logged in*/}
                    </Header>
                    <Sider breakpoint="lg" collapsedWidth="0" style={{backgroundColor:"blue"}} onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
                        <Sidebar/>
                    </Sider>
                    <Content>
                        Content for all jobs
                    </Content>
                    <Footer>
                        <Bottom/>
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default  Alljobs
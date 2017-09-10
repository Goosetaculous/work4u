import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/home/Homepage'
import Alljobs from './components/alljobs/'
import Bottom from './components/shared/footer'
import Top from './components/shared/header'
import Sidebar from './components/shared/sider'

import {Layout} from 'antd'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const {Header, Footer, Sider, Content} = Layout;


class App extends Component {

    render() {
        return (

            <Layout>
                <Header>
                    {/* TODO conditional rendering if logged in*/}
                    <Top/>
                </Header>
                {/* TODO conditional rendering if logged in*/}
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    style={{backgroundColor:"blue"}}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <Sidebar/>
                </Sider>
                <Content>
                    <Router>
                        <div>
                            <Route exact path="/" component={Home}/>
                            <Route path="/alljobs" component={Alljobs}/>
                        </div>
                    </Router>
                </Content>
                <Footer>
                    <Bottom/>
                </Footer>
            </Layout>
        );
    }
}

export default App;

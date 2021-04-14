import React, { Component } from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import {Layout} from 'antd'
import Todo from './pages/todo'
import About from './pages/about'
import './App.css'
import TopNav from './components/top-nav'
import ViewDetails from './pages/viewDetails'

const { Header, Content } = Layout

class App extends Component {
    state = {  }
    render() { 
        return (
            <Layout>
                <BrowserRouter>
                    <Header className='header'>
                        <TopNav></TopNav>
                    </Header>
                    <Content>
                        <Switch>
                            <Route path='/todo' exact component={Todo}></Route>
                            <Route path='/about' component={About}></Route>
                            <Route path="/todo/:id" component={ViewDetails}/>
                            <Redirect to='/todo'></Redirect>
                        </Switch>
                    </Content>
                </BrowserRouter>
            </Layout>
        )
    }
}
 
export default App
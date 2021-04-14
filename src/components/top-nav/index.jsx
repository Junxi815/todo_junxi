import React, { Component } from 'react'
import {Menu} from 'antd'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

class TopNav extends Component {
    state = {  }
    render() { 
        return ( 
            <Menu className='header-nav'>
                <Menu.Item className='header-nav-item'>
                    <Link to='/todo'>todo</Link>
                </Menu.Item>
                <Menu.Item className='header-nav-item'>
                    <Link to='/about'>about</Link>
                </Menu.Item>
            </Menu>
         )
    }
}
 
export default withRouter(TopNav)
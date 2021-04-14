import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button} from 'antd'

class ViewDetails extends Component {
    handleClick = () => {
        this.props.history.goBack()
    }

    render() { 
        const id = this.props.match.params.id
        const item = this.props.todoList.find(x=>x.id.toString()===id)
        return ( 
            <div style={{margin: '15px'}}>
                <ul>
                    <li>Description: {item.description}</li>
                    <li>Category: {item.category}</li>
                    <li>Content: {item.content}</li>
                </ul>
                <Button type='primary' onClick={this.handleClick}>Back</Button>
            </div>
            
        )
    }
}
 
export default connect(
    state=>({todoList:state}),
    null
)(ViewDetails)
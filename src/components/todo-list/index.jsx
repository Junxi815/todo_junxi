import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Button,Space } from 'antd'
import {deleteTodos} from '../../redux/actions'
import { withRouter } from 'react-router'
const {Column} = Table


class TodoList extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading:false
    }

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys })
    }

    deleteTodos = () =>{
        this.setState({loading:true})
        this.props.deleteTodos(this.state.selectedRowKeys)
        this.setState({
            selectedRowKeys:[],
            loading:false
        })
    }

    // deleteCurrentTodo = (e) =>{
    //     console.log('click delete')
    //     console.log(e)
    //     e.stopPropagation()
    // }

    render() { 

        const { selectedRowKeys } = this.state
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        }
        const hasSelected = selectedRowKeys.length > 0
        return ( 
        <div>
            <Button type="primary" onClick={this.deleteTodos} disabled={!hasSelected}>
            Delete seleted
            </Button>
            <Table rowSelection={rowSelection} 
                dataSource={this.props.todoList.map(item => {
                    return {key:item.id, description:item.description, category:item.category}
                    })}
                loading = {this.state.loading}
                onRow = {record => {
                    return {
                        onClick: (e)=>{
                            this.props.history.push(`/todo/${record.key}`)       
                        }
                    }
                }}
            >
                <Column title="Description" dataIndex="description" key="description" />
                <Column title="Category" dataIndex="category" key="category" onClick={this.showDetail}/>
                <Column 
                    title="Operate" 
                    key="operate"
                    render={(text, record) => (
                        <Space size="middle">
                        {/* <a style={{color:'red'}} onClick={this.deleteCurrentTodo}>Delete</a> */}
                        <span style={{color:'red',cursor:'pointer'}} 
                        onClick={
                            e=>{
                                e.stopPropagation()
                                this.setState({loading:true})
                                let ids = []
                                ids.push(record.key)
                                this.props.deleteTodos(ids);
                                this.setState({loading:false})
                            }
                        }
                        >
                        Delete</span>
                        </Space>
                    )}
                />

            </Table>
        </div> 
        )
    }
}
 
export default connect(
    state=>({todoList:state}),
    {deleteTodos}
)(withRouter(TodoList))


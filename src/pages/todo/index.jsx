import React, { Component } from 'react'
import {Form,Input,Select,Button} from 'antd'
import { connect } from 'react-redux'
import {nanoid} from 'nanoid'
import './index.css'
import TodoList from '../../components/todo-list'
import {addTodo} from '../../redux/actions'

const {TextArea} = Input

class Todo extends Component {

    handleSubmit = (values)=>{
        values.id = nanoid()
        this.props.addTodo(values)
    }

    render() { 
        return (
            <div className='main'>
                <div className='left-input'>
                    <Form 
                        initialValues={{
                            description: '',
                            category: 'CSS',
                            content: ''
                        }}
                        onFinish={this.handleSubmit}
                    >
                        <Form.Item name='description' label="Description">
                            <Input />
                        </Form.Item>
                        <Form.Item name='category' label="Category">
                            <Select>
                                <Select.Option value="CSS">CSS</Select.Option>
                                <Select.Option value="HTML">HTML</Select.Option>
                                <Select.Option value="JAVASCIPT">JAVASCIPT</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name='content' label="Content">
                            <TextArea rows={3} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className='right-todolist'>
                    <TodoList></TodoList>
                </div>
            </div>
        )
    }
}
 
export default connect(
    state=>({todoList:state}),
    {addTodo}
)(Todo)
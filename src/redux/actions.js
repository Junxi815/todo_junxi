import {ADD_TODO, DELETE_TODOS} from './action-types'

export const addTodo = (item) => (
        {
            type: ADD_TODO,
            data: item
        }
    )

export const deleteTodos = (ids) => ({ type: DELETE_TODOS, data: ids })

// export const setTableData = (data) => ({type: UPDATE_TABLE, data})

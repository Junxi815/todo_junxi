import {ADD_TODO, DELETE_TODOS} from './action-types'

//can be from database optionally.
const initTodos = [
    {id:'0', description: 'For test only', category: 'CSS', content: 'test1'},
    {id:'1', description: 'For test onlyDS', category: 'HTML', content: 'test1D'},
    {id:'2', description: 'For test only1111', category: 'JAVASCRIPT', content: 'test1F'},
]

export function changeTodos(state=initTodos,action){
    switch(action.type){
        case ADD_TODO:
            {
                const newTodo = action.data
                return [...state, newTodo]
            }
        case DELETE_TODOS:
            {
                const ids = action.data
                // ids.forEach( id => {
                //     newTodos = state.filter(item=>(item.id === id)).forEach(x => state.splice(state.indexOf(x), 1))
                // })
                // newTodos = ids.forEach(id=>{state.splice(state.findIndex(a=>a.id===id),1)})
                ids.forEach(id => {
                    state.forEach((item,index)=>{
                        if(item.id===id){
                            state.splice(index,1)
                        }
                    })
                })
                return state
            }
        default:
            return state
    }   
}
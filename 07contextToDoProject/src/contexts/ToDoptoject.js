import {
    createContext, useContext
} from "react"
 export const ToDoproject = createContext({
    todos: [
        {
            id: 1,
            todos: "Todo Msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
 })


export const useTodo = () =>{
    return useContext(ToDoproject)
}

export const Todoprovider = ToDoproject.provider

import {atom} from 'recoil' 


export const TodoList = atom({
    key : "todoList",
    default : []
})

export const FilterList = atom({
    key : "filterList",
    default: []
})
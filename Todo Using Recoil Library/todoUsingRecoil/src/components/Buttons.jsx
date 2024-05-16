import { useRecoilValue,useRecoilState } from "recoil"
import { TodoList,FilterList } from "../stores/atoms/TodoList";
import { useMemo,useCallback } from "react";

export default function Buttons({title,description,filterText}){

    const [todoList,setTodoList] = useRecoilState(TodoList);
    const [filterList,setFilterList] = useRecoilState(FilterList);

    const addTodo = ()=>{
        const tempList = {"title":title,"description":description};
        const mergedList = [...todoList,tempList];
        console.log(mergedList); 
        setTodoList((todoList) =>  [...todoList,tempList]);
    }

    const filterTodoList = useCallback(()=>{
        const filteredList = todoList.filter((element)=>{
            return element.title.includes(filterText) || element.description.includes(filterText);
        })
        setFilterList(filteredList);
    },[filterText])


    return (
        <div>
            <button onClick={addTodo}>Add to do</button>
            <button onClick={filterTodoList}>Filter List</button>
        </div>
        
    )
}
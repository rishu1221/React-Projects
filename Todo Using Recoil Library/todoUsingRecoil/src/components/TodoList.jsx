import { useRecoilValue } from "recoil";
import { TodoList } from "../stores/atoms/TodoList";

export default function TodoListComponent(){
    const todoListArray = useRecoilValue(TodoList);
    console.log("TodoList component Rendered");
    console.log(todoListArray)
    return (
        <div className="TodoListDiv">
            <h1 className="heading1">Complete List</h1>
            {todoListArray.map(function(element){
                return(
                    <div key={Math.random()*10}>
                    <h2>{element.title}</h2>
                    <p>{element.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
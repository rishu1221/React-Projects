import { useRecoilValue } from "recoil"
import { FilterList } from "../stores/atoms/TodoList";

export default function FilteredListComponent(){

    const listOfFilteredTodos = useRecoilValue(FilterList)

    return (
        <div>
            <h1 className="heading1">Filtered List</h1>
            {
                listOfFilteredTodos.map(function(element){
                    return (
                        <>
                            <h2>{element.title}</h2>
                            <p>{element.description}</p>
                        </>
                    )
                })
            }
        </div>
    )
}
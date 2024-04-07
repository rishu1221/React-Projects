import { useState } from "react";
import Buttons from "./Buttons";

export default function InputForm(){
    
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [filterText,setFilterText] = useState("");

    return (
        <div className="inputForm">
            <h1>Input Todos</h1>
            <div className="row">
                <div className="col-lg-12 p-3">
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter title" />
                </div>
                <div className="col-lg-12 p-3">
                <input type="text" onChange={(e)=>{setDescription(e.target.value)}} placeholder="Enter description" />
                </div>
                <div className="col-lg-12 p-3">
                <input type="text" onChange={(e)=>{setFilterText(e.target.value)}} placeholder="Enter filter text"/>
                </div>
            </div>
            
            
            
            <Buttons title={title} description={description} filterText={filterText}></Buttons>
        </div>
    )
}
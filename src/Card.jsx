import React from "react";
import { useState } from "react";
function Card({ todo,deleteTodo,editTodo,todolist }) {
  const [todoStatus,setTodoStatus] = useState("Not Completed")

  function changeTodoStatus(selectedTodo){
    const statusUpdate = todoStatus === "Completed" ? "Not Completed" : "Completed"
    // console.log(selectedTodo.id)
    const indexNum = todolist.findIndex(indexTodo => indexTodo.id===selectedTodo.id)
    setTodoStatus(statusUpdate)
    todolist[indexNum].status = statusUpdate
  }

  return (
    <div className="col-sm-4 mb-2">
      <div
        className="card p-3"
        style={{
          marginRight: "20px",
          borderColor: "#13AD89",
          backgroundColor: "#ccf5d3",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Name : {todo.name}</h5>
          <p className="card-text">Description : {todo.description}</p>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item dropdown" style={{display:"inline-block"}}>
              Status:
              <a
                className="nav-link dropdown-toggle"
                id={`navbarDropdown - ${todo.id}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{display:"inline-block",  backgroundColor: todo.status === "Not Completed" ? "#ff8084":"#d05e1f"}}
              >
                {todo.status}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#!" onClick={()=> changeTodoStatus(todo)}>
                    {todoStatus === "Not Completed" ? "Completed" : "Not Completed"}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-end">
          <a
            href="#"
            className="btn btn-primary"
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              backgroundColor: "#13AD89",
            }}
            onClick={()=>editTodo(todo)}
          >
            Edit
          </a>
          <a
            href="#"
            className="btn btn-primary"
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              marginLeft: "10px",
              backgroundColor: "#d05e20",
            }}
            onClick={()=>deleteTodo(todo)}
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

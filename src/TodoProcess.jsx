import React from "react";

function TodoProcess({
  addTodo,
  todoName,
  todoDescriptions,
  handleNameChange,
  handleDecriptionChange,
  updateTodo,
  editId,
}) {
  return (
    <div>
      <h3 className="text-center" style={{ color: "#13AD89", margin:"20px"}}>
        My todo
      </h3>
      <form className="form-inline container" onSubmit={editId ? updateTodo: addTodo}>
        <div className="row">
          <input
            type="text"
            className="mb-2 mr-sm-2 col-md-5"
            style={{
              marginRight: "20px",
              borderColor: "#13AD89",
            }}
            value={todoName}
            placeholder="Todo Name"
            onChange={handleNameChange}
            required
          />
          <input
            type="text"
            className="mb-2 mr-sm-2 col-md-4"
            style={{
              marginRight: "20px",
              borderColor: "#13AD89",
            }}
            value={todoDescriptions}
            placeholder="Todo Description"
            onChange={handleDecriptionChange}
            required
          />
          <button
            type="submit"
            className="btn btn-primary mb-2 col-md-2"
            style={{
              backgroundColor: "#13AD89",
              borderColor: "#13AD89",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoProcess;

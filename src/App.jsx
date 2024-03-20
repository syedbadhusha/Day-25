import { useState } from 'react'
import Card from './Card'
import TodoProcess from './TodoProcess'
import Filter from './Filter'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [todolist,setTodoList] = useState([])
  const [todoName,setTodoName] = useState('')
  const [todoDescriptions,settodoDescriptions] = useState('')
  const [editId,setEditId] = useState('')
  const [filterdtodolist,setfilterdtodolist] = useState(todolist)
  const [filterVar,SetFilterVar] = useState('All')

  function handleNameChange(event){
    setTodoName(event.target.value)
  }

  function handleDecriptionChange(event){
    settodoDescriptions(event.target.value)
  }
  function addTodo(event){
    event.preventDefault();
    const newTodo = {id:(todolist.length+1),name:todoName, description:todoDescriptions, status:"Not Completed"}
    setTodoList([...todolist,newTodo])
    setTodoName('')
    settodoDescriptions('')
  }
  function deleteTodo(selectedTodo){
    const newList = todolist.filter((ele)=>selectedTodo.id !== ele.id)
    setTodoList(newList)
  }
  function editTodo(selectedTodoeidt){
    setTodoName(selectedTodoeidt.name)
    settodoDescriptions(selectedTodoeidt.description)
    setEditId(selectedTodoeidt.id)
  }
  function updateTodo(event){
    event.preventDefault();
    const indexOfId = todolist.findIndex((ele)=>editId===ele.id)
    const newTodo = {id:editId,name:todoName, description:todoDescriptions, status:"Not Completed"}
    todolist[indexOfId]=newTodo;
    setTodoName('')
    settodoDescriptions('')
    setEditId('')
  }
  function filterFunc(event,filterValue){
    event.preventDefault();
    SetFilterVar(filterValue)
    let newList
    if(filterValue==='All')
    {
        newList = todolist;
    }else{
        newList = todolist.filter((ele)=> filterValue === ele.status)
    }
    setfilterdtodolist(newList)
}

  return (
    <>
    <TodoProcess 
      addTodo={addTodo}
      todoName={todoName}
      todoDescriptions={todoDescriptions}
      handleNameChange={handleNameChange}
      handleDecriptionChange={handleDecriptionChange}
      updateTodo={updateTodo}
      editId={editId}
    />
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-between' style={{marginTop:"50px", marginBottom:"50px",fontWeight:"bold"}}>
          <div>MY TODOS</div>
          <div><Filter filterVar={filterVar} filterFunc={filterFunc}/></div>
        </div>
        {
          filterVar !== "All" ? filterdtodolist.map((todo,index)=>{
            return (
              <Card key={index} todo={todo} deleteTodo = {deleteTodo} editTodo={editTodo} todolist={todolist}/>
            )
          }) : todolist.map((todo,index)=>{
            return (
              <Card key={index} todo={todo} deleteTodo = {deleteTodo} editTodo={editTodo} todolist={todolist}/>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default App

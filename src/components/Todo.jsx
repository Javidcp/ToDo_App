import { useState } from "react"
import "./Todo.css";
import { Button, Navbar, Container } from 'react-bootstrap';


const Todo = () => {

    const [todoList, setTodoList] = useState([]);

    let saveToDoList = (event) => {
        event.preventDefault();

        let toname = event.target.toname.value;
        if (!todoList.includes(toname)) {
            let finalDoList = [...todoList, toname.toUpperCase()];
            setTodoList(finalDoList)
        } else {
            alert("ToDo Name is Already Exists...")
        }
        
    }

    let list = todoList.map((value, index) => {

        return (
            <TodoListItems value={value} key={index} indexNumber={index} todoList={todoList} setTodoList={setTodoList} />
        )
    })
    return (
    <div className="main-form">
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>ToDo List</Navbar.Brand>
            </Container>
        </Navbar>
        <br /><br />
        <form className="TodoForm" onSubmit={saveToDoList}>
            <input 
                type="text" 
                name="toname"
                className="todo-input" 
                placeholder="What is the task today?"
            />
            <button type="submit" className="todo-btn">Add</button>
        </form>

        <div className="outerDiv">
            <ul>
                {list}
            </ul>
        </div>
    </div>
    )
}

export default Todo;


const TodoListItems = ({value, indexNumber, todoList, setTodoList}) => {


    let deleteRow = () => {
        let finalData = todoList.filter((v, i) => i != indexNumber)
        setTodoList(finalData);
    }

    

    return (
        <li>{indexNumber + 1} . {value}<span onClick={deleteRow}><Button variant="danger">Delete</Button></span></li>
    )
}
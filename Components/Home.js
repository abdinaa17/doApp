import React, {useState} from "react";
import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList"



function Home() {
const [todos, setTodos] = useState([])
//  Adding a Todo
const addTodo = (todo) => {
const id = Math.floor(Math.random() * 10000)
const newTodo = {id, ...todo, complete:false}

setTodos([...todos, newTodo])

}

// Deleting a Todo
const handleDelete = (id) => {

  const updatedTodos= todos.filter(todo => todo.id !== id)
  setTodos(updatedTodos)
}

//   Marking a Todo Complete 

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="home">
      < Header />
 <Form addTodo={addTodo} />
  {todos && < TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>} 
    </div>
  );
}

export default Home;

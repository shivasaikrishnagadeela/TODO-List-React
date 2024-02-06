import { useState } from 'react'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [newTodos, setNewTodos] = useState([]);

  const addTodos = () => {
    // Use an object to store both the todo and its unique identifier
    const todoItem = { text: newTodo, id: Date.now() };

    setNewTodos((prevTodos) => [...prevTodos, todoItem]);
    setNewTodo('');
  }

  const deleteTodo = (id) => {
    // Filter out the todo item with the given id
    setNewTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <div className='fls'>
        <h1 className='heading'> ADD TODO </h1>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setNewTodo(e.target.value)
          }}
          value={newTodo}
        />
        <button className='button' onClick={addTodos}>SUBMIT</button>
      </div>
      <div>
        {newTodos.map((todo) => (
          <div className='task' key={todo.id}>
            <p>{todo.text}</p>
            {/* Pass the id to the deleteTodo function */}
            <button className='delete-btn' onClick={() => deleteTodo(todo.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;

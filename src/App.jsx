import React, { useState, useEffect } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm "
import './App.css'; 

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <h1>TODO</h1>
      <TodoForm addTodo={addTodo} />
      <h2>TODOS</h2>
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
      <p>Всего: {todos.length}</p>
      <button className="clear-button" onClick={clearTodos}>Очистить список</button>
    </div>
  );
};

export default App;

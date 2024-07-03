import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      {isEditing ? (
        <button onClick={handleUpdate}>Сохранить</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Редактировать</button>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
    </div>
  );
};

export default TodoItem;

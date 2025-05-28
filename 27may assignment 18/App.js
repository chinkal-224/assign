import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTodoList([...todoList, task]);
    setTask('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', fontFamily: 'Arial' }}>
      <h2>My To-Do List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ width: '70%', padding: '8px' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 12px', marginLeft: '8px' }}>
        Add
      </button>

      <ul style={{ marginTop: '20px' }}>
        {todoList.map((item, index) => (
          <li key={index} style={{ marginBottom: '6px' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


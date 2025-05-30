import React, { useState } from "react";

function TaskForm({ onAdd }) {
  const [todo, setTodo] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todo || !userId) return;

    const res = await fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo,
        completed: false,
        userId: parseInt(userId),
      }),
    });

    const data = await res.json();
    onAdd(data);
    setTodo("");
    setUserId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        type="number"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;

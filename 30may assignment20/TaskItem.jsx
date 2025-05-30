import React from "react";

function TaskItem({ task, onUpdate, onDelete }) {
  const handleToggle = async () => {
    const res = await fetch(`https://dummyjson.com/todos/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    });

    const updatedTask = await res.json();
    onUpdate(updatedTask);
  };

  const handleDelete = async () => {
    await fetch(`https://dummyjson.com/todos/${task.id}`, {
      method: "DELETE",
    });
    onDelete(task.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      {task.todo} (User ID: {task.userId})
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;

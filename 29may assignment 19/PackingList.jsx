import React, { useState } from 'react';

function PackingList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Toothbrush', isPacked: false },
  ]);
  const [newItem, setNewItem] = useState('');

  // Add item
  const handleAdd = () => {
    if (newItem.trim() === '') return;
    const item = {
      id: Date.now(),
      name: newItem,
      isPacked: false,
    };
    setItems([...items, item]);
    setNewItem('');
  };

  // Toggle packed status
  const togglePacked = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, isPacked: !item.isPacked } : item
    );
    setItems(updated);
  };

  // Delete item
  const deleteItem = (id) => {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span
              onClick={() => togglePacked(item.id)}
              style={{
                textDecoration: item.isPacked ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {item.isPacked ? '✔️ ' : '☐ '}
              {item.name}
            </span>
            <button onClick={() => deleteItem(item.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;

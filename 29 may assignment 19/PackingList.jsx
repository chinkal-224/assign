import React, { useState } from 'react';

function PackingList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Toothbrush', isPacked: false },
  ]);
  const [newItem, setNewItem] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');

  // Add new item
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

  // Toggle packed/unpacked
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

  // Start editing item name
  const startEditing = (id, name) => {
    setEditingId(id);
    setEditingName(name);
  };

  // Save edited item name
  const saveEdit = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, name: editingName } : item
    );
    setItems(updated);
    setEditingId(null);
    setEditingName('');
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
            {editingId === item.id ? (
              <>
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                />
                <button onClick={() => saveEdit(item.id)}>Save</button>
              </>
            ) : (
              <>
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
                <button onClick={() => startEditing(item.id, item.name)} style={{ marginLeft: '10px' }}>
                  Edit
                </button>
                <button onClick={() => deleteItem(item.id)} style={{ marginLeft: '5px' }}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;

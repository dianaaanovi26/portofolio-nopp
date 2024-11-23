import React, { useState } from 'react';

function Crud() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState({ name: '', email: '', message: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const addItem = () => {
    if (input.name && input.email && input.message) {
      if (editIndex === null) {
        setItems([...items, input]);
      } else {
        const updatedItems = items.map((item, index) =>
          index === editIndex ? input : item
        );
        setItems(updatedItems);
        setEditIndex(null);
      }
      setInput({ name: '', email: '', message: '' });
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  return (
    <section id="crud" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">CRUD Section</h2>
        <div className="mb-4">
          <input
            type="text"
            className="form-control mb-2"
            name="name"
            placeholder="Enter your name"
            value={input.name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-control mb-2"
            name="email"
            placeholder="Enter your email"
            value={input.email}
            onChange={handleChange}
          />
          <textarea
            className="form-control mb-2"
            name="message"
            placeholder="Enter your message"
            rows="3"
            value={input.message}
            onChange={handleChange}
          ></textarea>
          <button
            onClick={addItem}
            className="btn btn-success btn-block"
          >
            {editIndex === null ? 'Add Item' : 'Save Changes'}
          </button>
        </div>

        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{item.name}</strong>
                <p>{item.email}</p>
                <p>{item.message}</p>
              </div>
              <div>
                <button
                  onClick={() => editItem(index)}
                  className="btn btn-warning btn-sm mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteItem(index)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Crud;

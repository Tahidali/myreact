import React, { useState } from 'react';

function TodoApp() {
  const [name, setName] = useState("");
  const [fitem, setFitem] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const formValue = { id: new Date().getTime(), name: name , checked: false };
    setFitem([...fitem, formValue]);
    setName("");
  }

  function handleToggleCheck(id) {
    setFitem(prevItems => prevItems.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  }

  return (
    <div className='container'>
      <h1>TodoApp</h1>
      <div className="d-flex ">
        <div>
          <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} placeholder='add your data....' />
        </div>
        <div>
          <button className='btn btn-primary' onClick={handleSubmit}>ADD</button>
        </div>
      </div>
      {
        fitem && fitem.map((item) => {
          const { id, name, checked } = item;
          return (
            <div key={id} className="col-md-4 my-4 bg-secondary d-flex gap-4">
              <div>
                <input type="checkbox" checked={checked} onChange={() => handleToggleCheck(id)} />
              </div>
              <div className='text-warning'>
                <h4 style={{ textDecoration: checked ? 'line-through' : 'none' }}>{name}</h4>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default TodoApp;

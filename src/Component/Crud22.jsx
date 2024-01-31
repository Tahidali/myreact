import React, { useEffect, useState } from "react";

function Crud22() {
  var [name, setname] = useState();
  var [data, setdata] = useState([]);
  var [edit, setedit] = useState(null);
  
  useEffect(()=>{
    var local =localStorage.getItem("newdata")
    if(local){
      setdata(JSON.parse(local))
    }
  },[])

  useEffect(() => {
    localStorage.setItem("newdata", JSON.stringify(data));
  }, [data]);
  

  function add(e) {
    e.preventDefault();
    var formvalue = { id: new Date().getTime(), name: name };
    setdata([...data, formvalue]);
    setname("");
  }

  function deleteitem(id) {
    var remove = data.filter((item) => item.id !== id);
    setdata(remove);
  }

  function EditValue(item) {
    var { id, name } = item;
    setedit(id);
    setname(name);
  }
  
  function Update(e) {
    e.preventDefault();
    var newdata = data.map((item) => {
      if (item.id === edit) {
        return { ...item, name };
      } else {
        return item;
      }
    });
    setdata(newdata);
    setname("");
  }

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-4 offset-3">
          <div className="input-group">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="form-control"
                placeholder="fill the input..."
              />
            </div>
            <div>
              <button className="btn btn-primary" onClick={add}>
                Add
              </button>
            </div>
            <div>
              <button className="btn btn-warning" onClick={Update}>
                updated
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            {data.map((item, index) => {
              const { id, name } = item;
              return (
                <tbody>
                  <tr>
                    <td key={index}>{id}</td>
                    <td>{name}</td>
                    <td>
                      <button
                        onClick={() => deleteitem(id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => EditValue(item)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crud22;

import React, { useState } from "react";

function Lateset() {
  var [name, setName] = useState("");
  var [table, setTable] = useState([]);
  var [editid, setEditid] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formValue = { name: name, id: new Date().getTime() };
    setTable([...table, formValue]);
    setName("");
  }

  function handleDelete(id) {
    var removedata = table.filter((item) => item.id !== id);
    setTable(removedata);
  }

  function takeValue(item) {
    const { name, id } = item;
    setName(name);
    setEditid(id);
  }

  function handleupdate(e) {
    e.preventDefault();
    var updatedata = table.map((item) => {
      if (item.id == editid) {
        return { ...item,name };
      } else {
        return item;
      }
    });
    setTable(updatedata)
    setName("");
  }


  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <div>
            <input
              type="text"
              placeholder="Name....."
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="bt py-4 text-center">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn btn-info" onClick={handleupdate}>
              Update
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
              </tr>
            </thead>
            {table &&
              table.map((item, index) => {
                const { name } = item;
                return (
                  <tbody>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>
                        <div className="bt">
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(item.id)}
                          >
                            delete
                          </button>
                          <button
                            className="ms-2 btn btn-success btn-sm"
                            onClick={() => takeValue(item)}
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Lateset;

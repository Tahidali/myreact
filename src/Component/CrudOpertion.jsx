import React, { useState } from "react";
import { useEffect } from "react";

function CrudOpertion() {
  const [name, setName] = useState("");
  const [table, setTable] = useState([]);
  const [editid, setEditid] = useState();
  const [islogin, setIslogin] = useState(false);
  const [search, setSearch] = useState("");
  const [searchedTable, setSearchedTable] = useState([]);

  useEffect(() => {
    const searchValue = search.toLowerCase();
    const filterdata = table.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setSearchedTable(filterdata);
  }, [search, table]);

  function add(e) {
    e.preventDefault();
    const formValue = {
      id: new Date().getTime(),
      name: name,
    };
    setTable([...table, formValue]);
    setName("");
  }

  function HandleDeleter(id) {
    const remove = table.filter((item) => item.id !== id);
    setTable(remove);
  }

  function takeValue(item) {
    const { id, name } = item;
    setName(name);
    setEditid(id);
    setIslogin(true);
  }

  function handleEdit(e) {
    e.preventDefault();
    const update = table.map((item) => {
      if (item.id == editid) {
        return { ...item, name };
      }
      return item;
    });
    setTable(update);
    setIslogin(false);
    setName("");
  }

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-md-6 offset-3">
          <div className="input-group">
            <input
              type="text"
              value={name}
              className="form-control"
              placeholder="enter name...."
              onChange={(e) => setName(e.target.value)}
            />
            <div className="bt">
              {islogin ? (
                <button className="btn btn-success" onClick={handleEdit}>
                  Update
                </button>
              ) : (
                <button className="btn btn-primary" onClick={add}>
                  Add
                </button>
              )}
            </div>
          </div>
          <div className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>Action</th>
              </tr>
              <input
                type="text"
                className="form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </thead>
            {table &&
              searchedTable.map((item, index) => {
                const { name } = item;
                return (
                  <tbody>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => HandleDeleter(item.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => takeValue(item)}
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

export default CrudOpertion;

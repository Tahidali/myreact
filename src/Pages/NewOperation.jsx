import React, { useEffect, useState } from "react";
function NewOperation() {
  const [fname, setFname] = useState("");
  const [data, setData] = useState([]);
  const [editid, setEditid] = useState("");
  const [bt, setBt] = useState(false);
  const [product, setProduct] = useState([]);
  const [isloading, setIsloading] = useState(false);

  function handleAdd(e) {
    e.preventDefault();
    var formValue = { fname: fname, id: new Date().getTime() };
    setData([...data, formValue]);
    setFname("");
  }

  function handleEdit(item) {
    const { fname, id } = item;
    setFname(fname);
    setEditid(id);
    setBt(true);
  }

  function handleUpdate(e) {
    e.preventDefault();
    const updatedData = data.map((item) => {
      if (item.id === editid) {
        return { ...item, fname: fname };
      } else {
        return item;
      }
    });
    setData(updatedData);
    setFname("");
    setBt(false);
  }

  function handleDelete(id) {
    const remove = data.filter((item) => item.id !== id);
    setData(remove);
  }

  useEffect(() => {
    setIsloading(true); // Set loading to true when the fetch starts.
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
        setIsloading(false); // Set loading to false when the fetch is complete.
      });
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 offset-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="Enter Your Name..."
            />
            <div className="bt">
              {bt ? (
                <button className="btn btn-success" onClick={handleUpdate}>
                  Update
                </button>
              ) : (
                <button className="btn btn-primary" onClick={handleAdd}>
                  Add
                </button>
              )}
            </div>
          </div>
          <div className="table">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.fname}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>{" "}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12">
          {isloading ? (
            <h1>Loading....</h1>
          ) : (
            product.map((item, index) => {
              const { title, image } = item;
              return (
                <div className="col-md-4 " key={index}>
                  <div className="card">
                    <h1>{title}</h1>
                    <img src={image} alt="" className="img-fluid" />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default NewOperation;

import React, { useState } from "react";
import { useEffect } from "react";

function Crud() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [tabledata, setTabledata] = useState([]);
  const [editid, setEditid] = useState("");
  const [isbtn, setIsbtn] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("crudData");
    if (data) {
      const parsedData = JSON.parse(data);
      setTabledata(parsedData);
      setFilteredData(parsedData);
    }
  }, []);


  function handleSearch(e) {
    const searchText = e.target.value.toLowerCase();
    const filteredResults = tabledata.filter(
      (item) =>
        item.fname.toLowerCase().includes(searchText) ||
        item.lname.toLowerCase().includes(searchText) ||
        item.email.toLowerCase().includes(searchText) ||
        item.phone.toString().includes(searchText)
    );
    setFilteredData(filteredResults);
    setSearch(searchText);
  }

  useEffect(() => {
    const data = localStorage.getItem("crudData");
    if (data) {
      setTabledata(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("crudData", JSON.stringify(tabledata));
    setFilteredData(tabledata)
  }, [tabledata]);



  function Submit(e) {
    e.preventDefault();
    var TableValue = {
      id: new Date().getTime(),
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
    };
    setTabledata([...tabledata, TableValue]);
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
  }

  function Delete(id) {
    const updatedelete = tabledata.filter((item) => item.id !== id);
    setTabledata(updatedelete);
  }
  
  function EditValue(item) {
    const { id, fname, lname, email, phone } = item;
    setFname(fname);
    setLname(lname);
    setEmail(email);
    setPhone(phone);
    setIsbtn(true);
    setEditid(id);
  }

  function handleEdit(e) {
    e.preventDefault();
    const Updatedata = tabledata?.map?.((item) => {
      if (item.id === editid) {
        return { ...item, fname, lname, email, phone };
      }
      return item;
    });
    setTabledata(Updatedata);
    setIsbtn(false);
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
  }

  return (
    <div className="container-fluid py-3 bg-info">
      <div className="col-md-5 offset-3">
        <div className="mb-3">
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="form-control"
            placeholder="Enter Firstname...."
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className="form-control"
            placeholder="Enter lastname...."
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Email...."
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            placeholder="Enter Mobile No...."
          />
        </div>
        <div className="py-3 text-center ">
          {isbtn ? (
            <button className="btn btn-warning" onClick={handleEdit}>
              Update
            </button>
          ) : (
            <button className="btn btn-primary" onClick={Submit}>
              Sumbit
            </button>
          )}
        </div>
        <div className="serch-inp">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            className="form-control" placeholder="Search......."
          />
        </div>
        <hr />
      </div>
      <div className="table offset-3 ">
        <thead
          className=" text-dark"
          style={{ width: "100%", background: "lightblue" }}
        >
          <tr className="text-center">
            <th>id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>action</th>
          </tr>
        </thead>
        {filteredData?.map?.((item, index) => {
          const { fname, lname, email, phone } = item;
          return (
            <>
              <tbody className="bg-light">
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{fname}</td>
                  <td>{lname}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => Delete(item.id)}
                    >
                      Delete
                    </button>
                    <button
                      className=" btn btn-sm btn-outline-warning"
                      onClick={() => EditValue(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Crud;

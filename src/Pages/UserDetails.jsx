import React, { useContext } from "react";
import { cartApp } from "../App";

function UserDetails() {
  const { table,setTable} = useContext(cartApp);
  return (
    <div className="container py-3">
      <div className="table">
        <table className="w-100">
        
          <thead className="bg-light shadow border text-center">
            <tr>
                <th>id</th>
              <th>UserName</th>
              <th>Email</th>
            </tr>
          </thead>

          {table.map((item, index) => {
            const {firstname,lastname, email,name } = item;
            return (
              <tbody className="text-center " style={{backgroundColor:"lightsalmon"}}>
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{firstname}  {lastname} {name} </td>
                    <td>{email}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default UserDetails;

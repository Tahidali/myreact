import React, { useContext, useEffect, useState } from "react";
import { cartApp } from "../App";
import Login from "../Component/Login";

function FetchingApi() {
  const [uiData, setUiData] = useState([]);
  const { isLoggedIn } = useContext(cartApp);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://kareliyainfotech.com/api/data.php"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.status);
        setUiData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // if(!isLoggedIn){
  //   return <Login/>
  // }

  return (
    <div className="container">
      <div className="row py-2">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Cost</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {uiData.length === 0 ? (
                <tr>
                  <td colSpan="3">No data available</td>
                </tr>
              ) : (
                uiData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.cost}</td>
                    <td>
                      <img
                        src={item.image}
                        alt=""
                        className="img-fluid"
                        style={{ height: "50px", width: "50px" }}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FetchingApi;














import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiData() {
  const [data, setdata] = useState([]);
    
  useEffect(() => {
    var fetchdata = async () => {
      try {
        var response = await axios.get("https://fakestoreapi.com/products");
        setdata(response.data);
      } catch (error) {
        console.log("error in api", error);
      }
    };
    fetchdata();
  }, []);

  function RemoveData(id){
    var removeitem = data.filter((item)=>item.id !==id)
    setdata(removeitem)
  
  }
  return (
    <div className="container">
        <h1>hello tahid</h1>
        <ul style={{listStyleType:"none"}} >
          {
            data.map((item,index)=>{
              const {title,image,id}=item;
              return <><div className="pb-2 col-md-4">
              <div className="card">
              <li key={index}>{id}</li>
                      <li>{title}</li>
                      <li className="pb-3"><img src={image} alt=""  className="img-fluide" style={{height:"50px",width:"50px"}}/></li>
                      <li>
                        <button className="btn btn-danger btn-sm" onClick={()=>RemoveData(item.id)}>Delete</button>
                      </li>
                      </div>
                      </div>
                      </>
            })
          }
        </ul>
    </div>
  );
}

export default ApiData;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ApiData() {
//   const [data, setdata] = useState([]);

//   useEffect(() => {
//     var fetchdata = async () => {
//       try {
//         var response = await axios.get("https://fakestoreapi.com/products");
//         setdata(response.data);
//       } catch (error) {
//         console.log("error in api ", error);
//       }
//     };
//     fetchdata();
//   }, []);

//   return (
//     <div className="container">
//       <h1>hello</h1>
//       {data.map((item, index) => (
//         <ul key={index}>
//           <li>{item.title}</li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// export default ApiData;

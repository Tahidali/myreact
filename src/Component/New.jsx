import React, { useEffect, useState } from "react";

function New() {
  const [name, setName] = useState("");
  const [uidata, setUidata] = useState([]);
  var [editid,setEditid]=useState("")
  var [search,setSearch]=useState("")
  var [filteredData,setFilteredData]=useState([])


  useEffect(()=>{
    var localData=localStorage.getItem("crudd")
    if(localData){
      var parseing=JSON.parse(localData)
      setUidata(parseing)
      setFilteredData(parseing);
    }
  },[])
  
  useEffect(() => {
    const data = localStorage.getItem("crudData");
    if (data) {
      setUidata(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("crudData", JSON.stringify(uidata));
    setFilteredData(uidata)
  }, [uidata]);  


  function handleSubmit(e) {
    e.preventDefault();
    const data = { id:new Date().getTime(), name: name };
    setUidata([...uidata,data])
    setName("")
  }
  function handleDelte(id){
    var remove = uidata.filter((item)=>
      item.id !== id);
       setUidata(remove)
  }

  function EditValue(item){
    const {name,id}=item
    setName(name)
    setEditid(id)
  }

  function handleupdate(){
    var Updatedata=uidata.map((item)=>{
      if(item.id == editid){
        return({...item,name})
      }else{
        return item;
      }
    })
    setUidata(Updatedata)
    setName("")
  }
  function handlesearch(e){
    setSearch(e.target.value.toLowerCase());
  }
  const filterSearch = uidata.filter((item)=>{
    return item.name.toLowerCase().includes(search)
  })
  return (
    <div className="container">
      <div className="col-md-4 offset-3">
        <div className="my-2 ">
          <input
            type="text"
            className="form-control"
            placeholder="Name ...."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="bt">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add
          </button>
          <button className="btn btn-success " onClick={handleupdate}>
            Update
          </button>
        </div>
        <div className="table">
          <thead>
            <tr>
              <th>Id:</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <div>
            <input type="text" value={search} onChange={handlesearch} className="form-control" placeholder="search here...."/>
          </div>
        {
          filterSearch.map((item,index)=>{
            const {name}=item;
            return <tbody>
              <tr>
                <td>{index+1}</td>
                <td>{name}</td>
                <td><button className="btn btn-sm btn-warning" onClick={()=>EditValue(item)}>Edit</button> <button className="btn btn-sm btn-danger"onClick={()=>handleDelte(item.id)}>Delete</button></td>
              </tr>
            </tbody>
          })
        }
        </div>
        </div>
      </div>
  );
}
export default New;

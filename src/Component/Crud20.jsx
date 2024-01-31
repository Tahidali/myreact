import React, { useEffect } from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom'

function Crud20() {
  const [name,setname]=useState("")
  const [data,setdata]=useState([])
  const[editid,seteditid]=useState()
  const [search,setsearch]=useState()
  const [filterdata,setFilteredData] = useState([])

 useEffect(()=>{
  var localdata=localStorage.getItem("crud")
  if(localdata){
    setdata(JSON.parse(localdata))
  }
 },[])
 
 useEffect(()=>{
  localStorage.setItem("crud",JSON.stringify(data))
  setFilteredData(data)
 },[data])

  function handleadd(e){
    e.preventDefault();
    var formvalue={name:name,id:new Date().getTime()}
    setdata([...data,formvalue])
    setname("")
  }
  function deletedata(id){
    const remove=data.filter((item)=>item.id!==id);
    setdata(remove)
  }

  function takevalue(item){
    const {name,id}=item
    setname(name)
    seteditid(id)
  }
  function updateValue(e){
    e.preventDefault();
    var updated=data.map((item)=>{
      if(item.id==editid){
        return{...data,name}
      }else{
        return item
      }
    })
    setdata(updated)
    setname("")
    seteditid(false)
  }

  function handleSearch(e){
    const searchText = e.target.value.toLowerCase();
    var searchValue=data.filter((item)=>
      item.name.toLowerCase().includes(searchText)
    )
    setFilteredData(searchValue)
    setsearch(searchText)
  }

  return (
    <div className='container py-4'>
      <div className="offset-4 w-25">
      <div>
        <input type="text" value={name} className='form-control' onChange={(e)=>setname(e.target.value)} placeholder='enter Your name...' />
      </div>
      <div className='py-2'>
      <button className='btn btn-primary w-100' onClick={handleadd}>Add</button>
      <button className='btn btn-info w-100' onClick={updateValue}>Update</button>
      </div>
      <div className="table">
        <div>
          <input type="text" className='form-control'placeholder='search....' value={search}  onChange={handleSearch}/>
        </div>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
          </tr>
        </thead>
        {
          (filterdata.length > 0 ? filterdata:data).map((item,index)=>{
            const{name}=item
            return <tbody>
              <tr>
                <td key={index}>{index+1}</td>
                <td>{name}</td>
                <td>
                  <button className='btn btn-sm btn-danger' onClick={()=>deletedata(item.id)}>Delete</button>
                  <button className='btn btn-sm btn-warning' onClick={()=>takevalue(item)}>Edit</button>
                </td>
              </tr>
            </tbody>
          })
        }
      </div>
      </div>
    </div>
  )
}
export default Crud20

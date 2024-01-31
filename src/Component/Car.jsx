import React, { useState } from "react";

function Car() {
    const [filterCar,setFilterCar]=useState([])
    const [brand ,setBrand]=useState("")
  const carList = [
    {
      name: "BMW M6",
      url: "https://mediapool.bmwgroup.com/cache/P9/201411/P90169551/P90169551-the-new-bmw-m6-coup-exterior-12-2014-600px.jpg",
      release_year: 2020,
    },
    {
      name: "VW Polo",
      url: "https://cdn.euroncap.com/media/30740/volkswagen-polo-359-235.jpg?mode=crop&width=359&height=235",
      release_year: 2018,
    },
    {
      name: "Audi S6",
      url: "https://www.motortrend.com/uploads/sites/5/2020/03/6-2020-audi-s6.jpg?fit=around%7C875:492.1875",
      release_year: 2020,
    },
    {
      name: "BMW M2",
      url: "https://imgd.aeplcdn.com/0x0/cw/ec/37092/BMW-M2-Exterior-141054.jpg?wm=0",
      release_year: 2019,
    },
    {
      name: "Audi A3",
      url: "https://cdn.motor1.com/images/mgl/BEooZ/s3/2021-audi-s3.jpg",
      release_year: 2019,
    },
    {
      name: "Mini Cooper",
      url: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/34561/cooper-convertible-exterior-left-front-three-quarter.jpeg?isig=0&q=80",
      release_year: 2012,
    },
  ];

  function handleYear(Year) {
    const filtercar = carList.filter((car) => car.release_year === Year);
    setFilterCar(filtercar);
  }

  function BrandSelection(item){
    const fitercardata=carList.filter((car)=>{
      if(item == ""){
        return true
      }else{
        return car.name.includes(item)
      }
    })
    setFilterCar(fitercardata)
    setBrand(item)

  }

 
  return (
    <div className="container">
      <div className="row py-4">
        <div className="py-3">
          <span className="fs-4 "> filter By Brand: </span>
          <select name="" id="" value={brand} className="border rounded" onChange={(e)=>BrandSelection(e.target.value)}>
            <option value="">All</option>
            <option value="BMW">BMW</option>
            <option value="VW">VW</option>
            <option value="Audi">Audi</option>
            <option value="Mini Cooper">MiniCooper</option>
          </select>
        </div>
        
        <div className="find-data d-flex gap-2">
          <h5>Find By Year:-</h5>
        <div className="bt">
            <button className="btn btn-sm btn-outline-primary" onClick={()=>handleYear()}>All</button>
          </div>
          <div className="bt">
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={()=>handleYear(2012)}
            >
              2012
            </button>
          </div>
          <div className="bt">
            <button className="btn btn-sm btn-outline-primary" onClick={()=>handleYear(2018)}>2018</button>
          </div>
          <div className="bt">
            <button className="btn btn-sm btn-outline-primary" onClick={()=>handleYear(2019)}>2019</button>
          </div>
          <div className="bt">
            <button className="btn btn-sm btn-outline-primary" onClick={()=>handleYear(2020)}>2020</button>
          </div>
        </div>
           {filterCar.length > 0 ? (
          filterCar.map((item, index) => (
            <div key={index} className="col-md-4 border mb-2 m-2 w-25 shadow">
              <h5>Car Name: {item.name}</h5>
              <h6>Year: {item.release_year}</h6>
              <img src={item.url} alt={item.name} className="img-fluid" />
            </div>
          ))
        ) :
        carList.map((item) => {
          const { name, release_year, url } = item;
          return (
            <>
            
              <div className="col-md-4 border mb-2 m-2 w-25 shadow">
                <h5>Car Name:-{name}</h5>
                <h6>Years:-{release_year}</h6>
                <img src={url} className="img-fluid" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Car;

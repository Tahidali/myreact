import React, { useEffect, useState } from 'react'


function WeatherApp() {
   const [weatherdata,setWeatherdata]= useState()
   const[search,setSearch]=useState("")

   useEffect(()=>{

    const fetchData=async()=>{
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c170cfb1c3fbbf0739132a2244a5eb3b&units=metric`)
    const data=await response.json();
    console.log(data);
      if(response.ok){
        setWeatherdata(data)
      }
  };
  fetchData()
},[search])

  return (
    <div className='main  p-5 p-sm-0 col-md-6 offset-md-3 '>
    <div className='main-box mt-5'>
        <div className='bg-box rounded rounded-4' style={{background:"rgba(0, 0, 255, 0.252)"}}>
            <div className='header py-3 text-center'>
                <h1 className='mb-0 py-2' style={{ lineHeight: "20px", fontWeight: "600" }}>

                    Weather<span className='text-warning'>App</span> <br /></h1>
                   <i> <span style={{ fontSize: "20px", fontWeight: "400", letterSpacing: "2px" }}>by TAHID</span></i>

                
            </div>
            {/* <hr /> */}
            <div className="main-body px-2 text-center ">
              <div className="inp d-flex justify-content-center">
                <input className='form-control text-center' type='text'  name='search' placeholder='Search city' onChange={(e) => setSearch(e.target.value)} value={search} />
                </div>
                {weatherdata ? <div className='element mt-0'>
                    {weatherdata.weather[0].icon && <img src={`https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}.png` }style={{height:"130px",width:"130px"}} alt='Weather Icon' />}
                    <p className='mb-2 fs-3 text-center'>  {weatherdata.name} </p>
                    <hr />
                    <p className='mb-2 fs-3 text-center'>  {weatherdata.main.temp} °C</p>
                    <hr />

                    <p className='mb-2 fs-3 text-center'>  {weatherdata.sys.country} </p>
                </div>
                    : <h5 style={{ color: "red", fontWeight: "600", padding: "10px", textAlign: "center", paddingTop: "20px" }}>Enter City..!!</h5>}
            </div>
        </div>
    </div>
</div>
);
};
export default WeatherApp
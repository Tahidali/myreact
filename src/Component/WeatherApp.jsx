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
    <div className='main  p-5 p-sm-0 '>
    <div className='main-box mt-5'>
        <div className='bg-info'>
            <div className='header py-3 text-center'>
                <h1 className='mb-0 mt-3' style={{ lineHeight: "20px", fontWeight: "600" }}>

                    Weather<span>App</span> <br />
                    <span style={{ fontSize: "1px", fontWeight: "400", letterSpacing: "2px" }}>by TAHID</span>

                </h1>
            </div>
            {/* <hr /> */}
            <div className="main-body px-2 text-center">
              <div className="inp w-50 text-center">
                <input className='form-control' type='text' name='search' placeholder='Search city' onChange={(e) => setSearch(e.target.value)} value={search} />
                </div>
                {weatherdata ? <div className='element mt-0'>
                    {weatherdata.weather[0].icon && <img src={`https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}.png`} alt='Weather Icon' />}
                    <p className='mb-2 fs-3 text-center'>  {weatherdata.name} </p>
                    <hr />
                    <p className='mb-2 fs-3 text-center'>  {weatherdata.main.temp} °C</p>
                    <hr />

                    <p className='mb-2 fs-3 text-center'>  {weatherdata.sys.country} </p>
                </div>
                    : <h5 style={{ color: "white", fontWeight: "600", marginTop: "20px", textAlign: "center", paddingTop: "20px" }}>Enter City..!!</h5>}
            </div>
        </div>
    </div>
</div>
);
};
export default WeatherApp
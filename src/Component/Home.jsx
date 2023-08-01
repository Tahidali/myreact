import React from 'react'

function Home() {
  return (
    <div className='container'>
        <div className="row text-center">
            <h1>home</h1>
            <div className="col-md-4">
                <div className="card text-bg-success">
                    <div className="card-body">
                        <h1 className='text-center'>hello world </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, odit?</p>
                        <button className='btn btn-info'>submit</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card text-bg-warning">
                    <div className="card-body">
                        <h1 className='text-center'>hello world </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, odit?</p>
                        <button className='btn btn-info'>submit</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card text-bg-dark">
                    <div className="card-body">
                        <h1 className='text-center'>hello world </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, odit?</p>
                        <button className='btn btn-info'>submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home

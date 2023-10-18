import React from 'react'
import { Link } from 'react-router-dom';
const Head = () => {
    return<>
   <div className="container-fluid">    
            <div className="row bg-info">
                <div className="col-auto col-sm-12 col-md-3 col-lg-4">
                    <h1 className="mt-2">Akshit</h1>
                </div>
                <div className="col-auto col-sm-12 col-md-9 col-lg-8">
                    <ul className="list-unstyled d-flex mt-4 mt-sm-0">
                        <li className=""><a href="" className="text-decoration-none mx-3 text-light">Home</a></li>
                        <li><Link href="" className="text-decoration-none mx-3 text-light" to="About">About</Link></li>
                        <li><a href="" className="text-decoration-none mx-3 text-light">Services</a></li>
                        <li><a href="" className="text-decoration-none mx-3 text-light">Gallery</a></li>
                        <li><a href="" className="text-decoration-none mx-3 text-light">Contect</a></li>
                        <li className="text-decoration-none mx-3 text-light"></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  
}
export default Head 
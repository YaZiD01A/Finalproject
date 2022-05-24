import React from 'react';
import {Link} from 'react-router-dom';

function Navigation (){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="./assets/IMG_0616.PNG" alt="" width={60} height={60} className="d-inline-block align-text-top" />
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" >Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SignIn" >Sign In </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SignUp" >Sign Up  </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#search">Search</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navigation
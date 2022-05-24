import React from 'react';
import {Link} from 'react-router-dom';

function Navigation (){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="./assets/IMG_0616.PNG" alt="" width="60" height="60" class="d-inline-block align-text-top" />
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/SignIn">Sign In</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/SignUp">Sign Up</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#search">Search</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navigation
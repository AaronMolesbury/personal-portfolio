import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div class="container-lg c1">
          <p1 class="p1">
            Junior Software Developer
          </p1>
          <h1 class = "h1">
            Aaron Molesbury
          </h1>
          <br/>
          <p2 class="p2">
            Hi, I'm Aaron! I have recently graduated from Heriot Watt University 
            with a degree <br/> in Computer Science and I'm looking to begin my Software Developer journey.
            You can<br/> learn more about what I can offer below.
          </p2>
          <br/>
          <br/>
          <Link to="/about">
            <button type="button" class="btn btn-dark btn-rounded" >
              About Me
            </button> 
          </Link>
        </div>
      );
}

export default Home;
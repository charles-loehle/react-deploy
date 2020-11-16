import React from 'react';
import downwardDogLanding from '../images/downward-dog-landing-cropped-tall.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <div className="banner">
        <div className="overlay">
          <h1 className="headline">Aches and Pains?</h1>
          <span className="tagline">Try some pain relieving yoga!</span>
          <Link to="/main" className="btn btn-primary">
            Click for a random Exercise
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

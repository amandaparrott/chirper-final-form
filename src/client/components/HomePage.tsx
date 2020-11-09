import React, { useState, useEffect } from 'react';
import ChirpBody from "./ChirpBody";
import { Link } from 'react-router-dom';
import ChirpsTimeline from './Chirps';

const HomePage: React.FC<IHomePageProps> = () => {
  return (
    <div className="container">
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Link to={'/api/chirps'}>
            <button className="btn btn-outline-info" type="button">Chirps</button>
          </Link>
          <Link to={'/addchirp'}>
            <button className="btn btn-outline-info" type="button">Add Chirp</button>
          </Link>
        </nav>
        <ChirpsTimeline />
      </div>
    </div>
  )
}

interface IHomePageProps { }

export default HomePage;
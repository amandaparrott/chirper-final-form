import react from 'react';
// import React from 'react';


import React from "react";
import { Link } from 'react-router-dom';


const ChirpBody: React.FC<IChirpBodyProps> = props => {
  return (
    <div className="card text-center d-flex justify-content-center m-3 shadow-lg border border-info rounded">
      <div className="card-body">
        <h5 className="card-title">@{props.chirp.user}</h5>
        <p className="card-text">{props.chirp.text}</p>
        <Link to={`/${props.chirp.id}/admin`} >
        <button className="btn btn-info rounded">Admin</button>
        </Link> 
        </div>
    </div>
  );
};

interface IChirpBodyProps {
    chirp: {
        id: string,
        user: string,
        text: string    
      }
}

export default ChirpBody;
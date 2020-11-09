import React from 'react';
import ChirpBody from "./ChirpBody";
import { Link } from 'react-router-dom';
import Chirps from './Chirps';

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      text: "",
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleUserChange(event) {
    this.setState({ user: event.target.value });
  }

  handleMessageChange(event) {
    this.setState({ text: event.target.value })
  }

  handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let res = await fetch('/api/chirps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      //  body: JSON.stringify({ user, text })
    })


  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Link to={'/api/chirps'}>
            <button className="btn btn-outline-info" type="button">Chirps</button>
          </Link>
          <Link to={'/addchirp'}>
            <button className="btn btn-outline-info" type="button">Add Chirp</button>
          </Link>
        </nav>
        <Chirps />
      </div>
    );
  }
}

interface IHomePageProps {
  chirps: []
}

interface IHomePageState {
  user: string,
  text: string
}

export default HomePage;
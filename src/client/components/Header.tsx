import React from 'react';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chirps: [
          {
            name: "Jean Ralphio",
            message: "I earned my money the old fashioned way. I got run over by a Lexus."
          },
          {
            name: "Chris Traeger",
            message: "Stop. Pooping."
          },
          {
            name: "Andy Dwyer",
            message: "I tried to make ramen in the coffee pot and I broke everything."
          },
        ],
        user: "",
        message: "",
      };
      
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleUserChange(event) {
      this.setState({ user: event.target.value });
    }
  
    handleMessageChange(event) {
      this.setState({ message: event.target.value })
    }
  
    handleClick(e) {
      e.preventDefault();
  
      const newChirp = {
        name: this.state.user,
        message: this.state.message
      }
    
      this.setState({
        chirps: [...this.state.chirps, newChirp],
        user: "",
        message: ""
      });
    }
  
    render() {
      return (
        <div>
          <form className="d-flex justify-content-center align-items center">
            <div className="form-group col col-6 shadow-lg border border-info rounded mt-3 text-center">
              <label className="font-weight-bolder">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username here"
                value={this.state.user}
                onChange={(e) => this.handleUserChange(e)}
              ></input>
              <div className="form-group">
                <label className="font-weight-bolder">Chirp</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Chirp it out!"
                  value={this.state.message}
                  onChange={(e) => this.handleMessageChange(e)}
                ></input>
              </div>
              <button
                className="btn btn-info btn-block w-50 mx-auto shadow-sm mb-2"
                onClick={e => this.handleClick(e)}
              >
                Chirp Chirp Bro!
              </button>
            </div>
          </form>
  
          {/* <div className="posts">
            <Timeline chirps={this.state.chirps}/>
          </div> */}
        </div>
      );
    }
  }

export default Header;
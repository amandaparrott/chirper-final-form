import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Chirps from './components/Chirps';
import HomePage from './components/HomePage';
import Users from './components/Users';

const App = (props: IAppProps) => {
	const [greeting, setGreeting] = React.useState<string>('');

	React.useEffect(() => {
		(async () => {
			try {
				const res = await fetch('/');
				const greeting = await res.json();
				setGreeting(greeting);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
			<div>
			  <Header />
			  <Router>
				<React.Fragment>
					<div className="container justify-content-center">
				  <div className="row col-12 justify-content-center">
				  <Link to="/">
					  <button type="button" className="btn btn-info shadow m-5">
						  Home
					  </button>
				  </Link>
				  <Link to="/films">
					<button type="button" className="btn btn-info shadow m-5">
					  Load Films
					</button>
				  </Link>
				  <Link to="/people">
					<button type="button" className="btn btn-info shadow m-5">
					  Load Characters
					</button>
				  </Link>
				  </div>
				  </div>
				  <Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/chirps" component={Chirps} />
					<Route path="/users" component={Users} />
				  </Switch>
				</React.Fragment>
			  </Router>
			</div>
	);
};

interface IAppProps {
	id: number;
}

interface IAppState {
	name: string;
}



export default App;

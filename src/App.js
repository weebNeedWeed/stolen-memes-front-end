import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/pages/Home";
import Upload from "./components/pages/Upload";
import DialogContainer from "./containers/DialogContainer";

function App() {
	return (
		<Router>
			<div className="container">
				<Header />
				<main>
					<Switch>
						<Route path="/upload" exact component={Upload} />
						<Route path="/p=:pageid" exact component={Home} />
						<Route exact component={Home} />
					</Switch>
				</main>
				<Footer />
				<DialogContainer />
			</div>
		</Router>
	);
}

export default App;

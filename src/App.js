import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JobDetails from "./components/JobDetails";
import JobsList from "./components/JobsList";
import Layout from "./components/Layout";

function App() {
	return (
		<Router>
			<Switch>
				<Layout>
					<Route exact path="/" component={JobsList} />

					<Route path="/job/:id" component={JobDetails} />
				</Layout>
			</Switch>
		</Router>
	);
}

export default App;

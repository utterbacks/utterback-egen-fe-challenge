import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JobDetails from "./components/JobDetails";
import JobsList from "./components/JobsList";
import Layout from "./components/Layout";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Layout>
						<JobsList />
					</Layout>
				</Route>

				<Route path="/job/:id">
					<Layout>
						<JobDetails />
					</Layout>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

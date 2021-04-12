import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JobDetails from "./components/JobDetails";
import JobsList from "./components/JobsList";

function App() {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<Router>
			<div>
				<div className={theme + "-theme"}>
					<header className="nav">
						<a href="/">
							<div>devjobs</div>
						</a>
						<div onClick={toggleTheme}>
							<i class="far fa-moon"></i>{" "}
							{theme === "light" ? (
								<i class="fas fa-toggle-on "></i>
							) : (
								<i class="fas fa-toggle-off "></i>
							)}{" "}
							<i class="far fa-sun"></i>
						</div>
					</header>

					<Switch>
						<Route exact path="/" component={JobsList} />

						<Route path="/job/:id" component={JobDetails} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;

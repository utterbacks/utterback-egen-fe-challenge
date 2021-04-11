import React, { useState, useEffect } from "react";
import Job from "./Job";

const PROXY_SERVER = "https://mysterious-plateau-89015.herokuapp.com/";
const BASE_URL = "https://jobs.github.com/positions.json";
console.log(PROXY_SERVER + BASE_URL);

function JobsList() {
	const [jobs, setJobs] = useState([]);

	const getJobs = async () => {
		try {
			const res = await fetch(PROXY_SERVER + BASE_URL);
			const jobs = await res.json();
			setJobs(jobs);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getJobs();
	}, []);

	return (
		<div>
			<div className="job-list">
				{jobs.map((job) => {
					return <Job key={job.id} job={job} />;
				})}
			</div>
		</div>
	);
}

export default JobsList;
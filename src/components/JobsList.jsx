import React, { useState, useEffect } from "react";
import Job from "./Job";
import Pagination from "./Pagination";

const PROXY_SERVER = "https://mysterious-plateau-89015.herokuapp.com/";
const BASE_URL = "https://jobs.github.com/positions.json";
console.log(PROXY_SERVER + BASE_URL);

function JobsList() {
	const [jobs, setJobs] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getJobs = async () => {
		try {
			const res = await fetch(PROXY_SERVER + BASE_URL);
			const jobs = await res.json();
			setJobs(jobs);
			setLoading(!isLoading);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getJobs();
		// eslint-disable-next-line
	}, []);
	const maxPages = Math.floor(jobs.length / 12 + 1);
	return (
		<div>
			<div className="job-list">
				<div className="loading">
					{isLoading && (
						<div class="lds-ellipsis">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					)}
				</div>
				<Pagination
					data={jobs}
					RenderComponent={Job}
					title="jobs"
					pageLimit={5}
					dataLimit={12}
					maxPages={maxPages}
				/>
			</div>
		</div>
	);
}

export default JobsList;

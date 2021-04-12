import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const PROXY_SERVER = "https://mysterious-plateau-89015.herokuapp.com/";
const BASE_URL = "https://jobs.github.com/positions";

function JobDetails() {
	const { id } = useParams();
	const [job, setJob] = useState({});

	const getJob = async () => {
		try {
			const res = await fetch(PROXY_SERVER + BASE_URL + `/${id}.json`);
			const newJob = await res.json();
			setJob(newJob);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		getJob();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="details-page">
			<div className="job-details-card">
				<h1 className="job-details-title">{job.title}</h1>
				<button>Apply Now</button>
				<div className="job-location"> {job.location} </div>
				<div> {ReactHtmlParser(job.description)} </div>
			</div>
		</div>
	);
}

export default JobDetails;

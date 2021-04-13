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
	}, [id]);

	return (
		<div className="details-page">
			<div className="company-header-card">
				<h2>
					{job.company_logo && (
						<img
							src={job.company_logo}
							alt=""
							className="company-header-logo"
						/>
					)}{" "}
					{job.company}{" "}
				</h2>
				<a href={job.company_url} className="company-site">
					{" "}
					Company Site{" "}
				</a>
			</div>
			<div className="job-details-card">
				<div>{job.type} </div>
				<div className="title-line">
					<h1 className="job-details-title">{job.title}</h1>
					<a href={job.url} className="apply-now">
						Apply Now
					</a>
				</div>
				<div className="job-location"> {job.location} </div>
				<div> {ReactHtmlParser(job.description)} </div>
			</div>
			<div className="apply-card">
				<h3>How To Apply</h3>
				<div> {ReactHtmlParser(job.how_to_apply)} </div>
			</div>
		</div>
	);
}

export default JobDetails;

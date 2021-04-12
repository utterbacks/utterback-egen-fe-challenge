import React from "react";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

function Job({ job }) {
	return (
		<Link to={`/job/${job.id}`} className="job-card">
			{job.company_logo && (
				<img src={job.company_logo} alt="" className="thumbnail" />
			)}

			<div className="job-card-content">
				<ReactTimeAgo date={job.created_at} locale="en-US" /> - {job.type}
				<h3 className="job-card-title">{job.title}</h3>
				{job.company}
				<div className="job-location">{job.location}</div>
			</div>
		</Link>
	);
}

export default Job;

import React from "react";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

function Job({ data }) {
	return (
		<Link to={`/job/${data.id}`} className="job-card">
			{data.company_logo && (
				<img src={data.company_logo} alt="" className="thumbnail" />
			)}

			<div className="job-card-content">
				<ReactTimeAgo date={data.created_at} locale="en-US" /> - {data.type}
				<h3 className="job-card-title">{data.title}</h3>
				{data.company}
				<div className="job-location">{data.location}</div>
			</div>
		</Link>
	);
}

export default Job;

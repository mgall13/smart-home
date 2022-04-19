import React from "react";
import { Link } from "react-router-dom";

const ApprovedList = ({ projects, projectDescription }) => {
	if (!projects.length) {
		return <h3> No Available Projects Yet </h3>;
	}
	return (
		<div>
			<h3> {projectDescription}</h3>
			{projects &&
				projects.map((project) => (
					<div key={project._id} className="card mb-3">
						<div className="card-body">
								<p className="mb-0">Project Owner:{project.userName}</p>
								<p>Project Description:{project.projectDescription}</p>
								<p className="mb-0">
									Project Materials:{project.projectMaterials}
								</p>	
								<p className="mb-0">
									Project initial Price:{project.initPrice}
								</p>
							
						</div>
					</div>
				))}
		</div>
	);
};
export default ApprovedList;

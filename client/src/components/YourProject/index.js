import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CUSTOMER } from "../../utils/queries";
import Auth from "../../utils/auth";
import ProjectList from "../ProjectList";
import OfferList from "../OfferList";
const YourProject = () => {
	const { userName: userParam } = useParams();
	const { loading, data } = useQuery(QUERY_CUSTOMER, {
		variables: { userName: userParam },
	});
	const user = data?.loggedUser || {};
	// redirect to personal profile page if username is the logged-in user's
	if (Auth.customerLoggedIn() && Auth.getProfile().data.userName === userParam)
		return <Redirect to="/YourProject" />;
	if (loading) {
		return <div> loading ... </div>;
	}
	if (!user?.userName) {
		return (
			<h4>
				You need to be logged in to see this page. Use the navigation links
				above to sign up or log in
			</h4>
		);
	}
	return (
		<div>
			<div className="flex-row mb-3">
				<h2 className="bg-dark text-secondary p-3 display-inline-block">
					Viewing the job offers
				</h2>
			</div>
			<div className="flex-row justify-space-between mb-3">
				<div className="col-12 mb-3 col-lg mb-3">
					<ProjectList projects={user.projects}></ProjectList>
				</div>
			</div>
			<div className="flex-row justify-space-between mb-3">
				<div className="col-12 mb-3 col-lg mb-3">
					<OfferList projects={user.offers}></OfferList>
				</div>
				</div>
			
		</div>
	);
};
export default YourProject;

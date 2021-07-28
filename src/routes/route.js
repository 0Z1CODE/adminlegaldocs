import React from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "./../services/axios";

const LANDING_HOST = "http://localhost:3030";

const AppRoute = ({
	component: Component,
	layout: Layout,
	isAuthProtected,
	isUserLoggedIn,
	isMountDataLoaded,
	...rest
}) => {
		
		const {pathname} = window.location;
		if(pathname.indexOf("/auth/") !== -1){
			const auth_hash = pathname.replace("/auth/", "");
			axios.post("check-hash", {
				auth_hash: auth_hash
			}).then((r)=> {
				const result = r.data.result;
				if(result){
					sessionStorage.setItem('token', auth_hash);
					window.location.replace("/home");
				} else {
					window.location.replace(`${LANDING_HOST}/#sign_in`);
				}
			});
		}
		return (<Route
			{...rest} 
			
			render={props => { 
				if (isAuthProtected && !isUserLoggedIn && isMountDataLoaded) { 
					return (
						<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
					);				
				} 

				if (!isAuthProtected && isUserLoggedIn && isMountDataLoaded) { 
					return (
						<Redirect to={{ pathname: "/home", state: { from: props.location } }} />
					);				
				} 

				return (
					<Layout>
						<Component {...props } />
					</Layout>
				);
			}}
		/>
	)};

export default AppRoute;


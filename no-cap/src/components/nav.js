import React from "react";
import '../scss/style.css';
import NavCollapse from "./navCollpase.js"
import NavButton from "./navButton.js"

class Nav extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-inverse navbar-fixed-top" id='head'>
					<NavButton />
					<NavCollapse />
			</nav>
		);
	}
}

export default Nav;
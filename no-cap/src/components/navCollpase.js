import React from "react";
import '../scss/style.css';

class NavCollapse extends React.Component{
	render(){
		return(
			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul className="nav navbar-nav">
                    <li><a className="nav-link">Home</a></li>
                    <li><a className="nav-link">Projects</a></li>
                    <li><a className="nav-link">Profile</a></li>
                </ul>
			</div>
		);
	}
}

export default NavCollapse;
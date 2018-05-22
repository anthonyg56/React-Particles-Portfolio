import React from "react";
import '../scss/style.css';

class NavButton extends React.Component{
	render(){
		return(
			<div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <h1>Anthony Gayflor</h1>
            </div>
		);
	}
}

export default NavButton;
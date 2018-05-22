import React from "react";
import '../scss/style.css';

const Icon = () =>(
	<div className="container text-center icon">
    	<i className="fa fa-arrow-down animated bounce infinite"></i>
    </div>
);
const Header = () => (
    <div className="header">
        <h1 className="header-title">Lets Help The World See Your Vision</h1>
        <h3 className="header-sub-title">Software Engineer</h3>
        <button>View Projects</button>
        
    </div> 
    
);

export default Header;
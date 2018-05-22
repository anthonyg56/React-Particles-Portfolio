import React from "react";
import '../scss/style.css';
import Form from './form.js';

const Profile = () => (
	<div className="wrapper">
		<h1 className="profile-title"><span className="green">Create</span>, <span className="red">Inspire</span>, <span className="blue">Innovate</span></h1>
		<p className="profileP">Hey! my names Anthony. Im a self taught software developer looking to inspire innovation and change to people lives.</p>
		<img src="../tech.png" alt="Anthony Gayflor"/>
		<div className="form-wrapper">
			<Form className="form"/>
		</div>
	</div>
);

export default Profile;
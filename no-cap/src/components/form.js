import React from "react";
import '../scss/style.css';

const Form = () => (
	<div className="wrapper text-center" action="https://formspree.io/nathanielsinvestments@gmail.com"
      			method="POST">
		<h1 className="form-title"> Lets Work!</h1>
		<form className="form-form">
			<input type="text" name="name" placeholder="Name"/>
			<input type="text" name="Email" placeholder="Email"/>
			<br/>
			<input type="text" name="txt" placeholder="About your project"/>
			<br/>
			<button type="submit" value="Send">Submit</button>
		</form>
	</div>
);

export default Form;
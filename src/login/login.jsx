import { useState } from 'react';
import Signup from './signup';

function LoginPage({pageProperties}) {
	return (
		<>
			<div className="login-container">
				<div className="login-Box">
					<div className="field-block">
						<label htmlFor="username">Username</label>
						<input id="username" type="text" />
					</div>
					<div className="field-block">
						<label htmlFor="password">Password</label>
						<input name="password" type="password" />
					</div>
					<div className="field-block">
						<button className="create_account_button" onClick={pageProperties.navigateSignupPage}>Create account</button>
						{/* <a href="https://www.google.com">Login with Mobilenumber</a> */}
						<button onClick={pageProperties.validate}>Submit</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default function Login({isLoggedIn}) {
	let [isSignUpPageLoaded, setIsSignUpPageLoaded] = useState(false);
	const pagePropertiesObj = {
		navigateSignupPage: LoadSignUpPage,
		validate: ValidateFields
	}
	function LoadSignUpPage() {
		setIsSignUpPageLoaded(isSignUpPageLoaded ? false : true);
		console.log("clicked LoadSignUpPage");
	}
	function ValidateFields() {
		isLoggedIn();
	}
	return(
		<>
			{isSignUpPageLoaded ? <Signup pageProperties={pagePropertiesObj}/> : <LoginPage pageProperties={pagePropertiesObj} />}
		</>
	)
};
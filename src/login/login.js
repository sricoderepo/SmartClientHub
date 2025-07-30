function Login() {
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
						<a href="https://www.google.com">Login with Mobilenumber</a>
						<button>Submit</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login;
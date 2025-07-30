export default function Signup({pageProperties}) {
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
                        <button className="create_account_button" onClick={pageProperties.navigateSignupPage}>Login</button>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}
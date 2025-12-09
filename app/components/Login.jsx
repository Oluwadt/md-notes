const Login = () => {
  return (
    <>
        <div className="login-container">
            <h1 className="text-gradient">MDNOTES</h1>
            <h2>Organized note taking made easy</h2>
            <p>Build your very own archive of easily navigated and indexed information and 
                notes.</p>
            <div className="full-line"></div>
            <h6>Sign in</h6>
            <div>
                <p>Email</p>
                <input type="text" placeholder="Enter your email address" />
            </div>
            <div>
                <p>Password</p>
                <input type="password" placeholder="********" />
            </div>
            <button className="submit-btn">
                <h6>Submit</h6>
            </button>
            <div className="secondary-btns-container">
                <button className="card-button-secondary">
                    <small>Login</small>
                </button>
                <button className="card-button-secondary">
                    <small>Forgot password?</small>
                </button>
            </div>
            <div className="full-line"></div>
            <footer>
                <a href="http://github.com/Oluwadt/md-notes" target="_blank">
                    <img src="pfp.png" alt="pfp" />
                    <h6>@Oluwadt</h6>
                    <i className="fa-brands fa-github"></i>
                </a>
            </footer>
        </div>
    </>
  )
}

export default Login
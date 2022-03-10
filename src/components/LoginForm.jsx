

const LoginForm = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <h2>Login</h2>  
      </div>
      <form>
        <div className="left">
          <input type="text" name="username" id="" placeholder="Your Name" />
          <input type="email" name="email" id="" placeholder="Your Email" />
          <input
            type="password"
            name="passwrod"
            id=""
            placeholder="Password"
          />
          <button className="btn">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;
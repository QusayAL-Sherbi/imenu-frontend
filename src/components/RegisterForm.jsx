

const RegisterForm = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <h2>Register</h2>  
      </div>
      <form>
        <div className="left">
          <input type="text" name="username" id="" placeholder="Your Name" />
          <input type="email" name="email" id="" placeholder="Your Email" />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
          <button className="btn">Register</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm;
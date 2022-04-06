import "./login.scss"

function Login() {
  return (
    <div className="login">
      <form action="">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
        <span>Wrong email or password</span>
      </form>
    </div>
  )
}

export default Login

import "./login.scss"

function Login() {
  return (
    <div className="login">
      <form action="">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login

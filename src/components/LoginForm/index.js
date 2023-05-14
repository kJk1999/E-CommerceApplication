// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitErr: false, errorMsg: ''}

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitErr: true, errorMsg})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
      console.log(data)
      const jwtToken = data.jwt_token
      console.log(jwtToken)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitErr, errorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt=" website login"
          className="login-image"
        />

        <form className="login-form" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-logo"
          />
          <div className="input-card">
            <label htmlFor="usernameEl">USERNAME</label>
            <input
              id="usernameEl"
              type="text"
              className="inputEl"
              value={username}
              onChange={this.onChangeUsername}
              placeholder="Username"
            />
          </div>
          <div className="input-card">
            <label htmlFor="passwordEl">PASSWORD</label>
            <input
              id="passwordEl"
              type="password"
              className="inputEl"
              value={password}
              onChange={this.onChangePassword}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitErr && <p>{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm

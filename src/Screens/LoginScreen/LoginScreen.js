import React, { Component } from 'react'
import { TextField, LoadingIndicator, Button } from '@mo_dev/bits'
import { createAPICall, getStore } from 'litsy'

import './loginScreen.scss'
import { Header } from '../../Components'

export class LoginScreen extends Component {

  state = {
    password: "",
    errored: false
  }

  componentDidMount() {
    this.validateToken()
  }

  render() {
    return (
      <div className="loginScreen">
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <Header />
        </div>
        {
          !getStore("mo_dev_web", true).getState("auth") ||
            (getStore("mo_dev_web", true).getState("auth") &&
              !getStore("mo_dev_web", true).getState("auth").dirty) ?
            [
              <TextField
                key="passTextField"
                isSecret
                errored={this.state.errored}
                onChange={(event) => { this.setState.bind(this)({ password: event.target.value }) }}
                placeholder="Enter admin password"
                onHitReturn={this.validatePassword.bind(this)}
              />,
              <div
                key="spacing"
                className="spacing"
              />,
              <Button
                key="loginButton"
                type="text"
                onClick={this.validatePassword.bind(this)}
              >
                Login as Mohammad
              </Button>
            ] :
            <LoadingIndicator />
        }
      </div>
    )
  }

  validatePassword() {
    const checkPass = createAPICall({
      // url: '/api/auth/authenticate',
      url: 'https://api.mohammad.dev/auth/authenticate',
      method: 'post',
      storeName: "mo_dev_web",
      stateName: "auth",
      saveToStore: true,
      bodyData: {
        password: this.state.password
      }
    })

    const localStore = getStore("mo_dev_web", true)
    localStore.subscribe("auth", "LoginScreen", (state) => {
      if (state.token) {
        this.validateToken.bind(this)()
      } else {
        this.setState.bind(this)({ errored: true })
      }
    })

    checkPass()
  }

  validateToken() {

    //check pre-existing values
    if (!(getStore("mo_dev_web", true).getState("auth") && getStore("mo_dev_web", true).getState("auth").token)) {
      return;
    }

    const checkToken = createAPICall({
      // url: '/api/auth/authenticateUsingToken',
      url: 'https://api.mohammad.dev/auth/authenticateUsingToken',
      method: 'post',
      storeName: "mo_dev_web",
      stateName: "auth__tokenStatus",
      saveToStore: true,
      bodyData: {
        token: getStore("mo_dev_web", true).getState("auth").token
      }
    })

    const localStore = getStore("mo_dev_web", true)
    localStore.subscribe("auth__tokenStatus", "LoginScreen", (state) => {
      if (state.code === 200) {
        window.location.assign("/dashboard")
      } else {
        this.setState.bind(this)({ errored: true })
      }
    })

    checkToken()
  }
}

export default LoginScreen

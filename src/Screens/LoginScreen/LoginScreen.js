import React, { Component } from 'react'
import { TextField, LoadingIndicator } from '@mo_dev/bits'
import { createAPICall, getStore } from 'litsy'

import './loginScreen.scss'

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
                {
                    !getStore("mo_dev_web", true).getState("auth") ||
                        (getStore("mo_dev_web", true).getState("auth") &&
                            !getStore("mo_dev_web", true).getState("auth").dirty) ?
                        <TextField
                            isSecret
                            errored={this.state.errored}
                            onChange={(event) => { this.setState.bind(this)({ password: event.target.value }) }}
                            placeholder="Enter admin password"
                            onHitReturn={this.validatePassword.bind(this)}
                        /> :
                        <LoadingIndicator />
                }
            </div>
        )
    }

    validatePassword() {
        const checkPass = createAPICall({
            // url: '/api/auth/authenticate',
            url: 'https://mohammad.dev/api/auth/authenticate',
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
            url: 'https://mohammad.dev/api/auth/authenticateUsingToken',
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

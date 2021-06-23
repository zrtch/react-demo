import React, { Component } from "react"
import Header from "../../components/header"
import "./login.scss"

class Login extends Component {
    render() {
        return (
            <div className="p-login">
                <Header />
                <h1>login page</h1>
                <button
                    onClick={() => {
                        this.gotHome()
                    }}
                >
                    跳转home页
                </button>
            </div>
        )
    }

    gotHome() {
        this.props.history.push("home")
    }
}

export default Login

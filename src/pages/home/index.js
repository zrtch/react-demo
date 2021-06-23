import React, { Component } from "react"
import Header from "../../components/header"
import "./home.scss"

class Home extends Component {
    render() {
        return (
            <div className="p-home">
                <Header
                    param1="abc"
                    param2="c"
                    func1={() => {
                        console.log("func1")
                    }}
                />
                <h1>home page</h1>
            </div>
        )
    }
}

export default Home

import {Component} from "react"
import './header.css'

class Header extends Component{
    render(){
        return (
            <div className="header">
                <div className="logoContainer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                </div>
                <div className="buttonContainer">
                    <button>Sign In</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}

export default Header
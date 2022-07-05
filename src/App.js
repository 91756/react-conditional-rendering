import {Component} from 'react'
import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {isLogged: false}

  isLoggedChange = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  renderAuthButton = () => {
    const {isLogged} = this.state
    if (isLogged === true) {
      return (
        <button type="button" onClick={this.isLoggedChange}>
          Logout
        </button>
      )
    }
    return (
      <button type="button" onClick={this.isLoggedChange}>
        Login
      </button>
    )
  }

  render() {
    let authButton
    const {isLogged} = this.state
    if (isLogged === true) {
      authButton = (
        <button type="button" onClick={this.isLoggedChange}>
          Logout
        </button>
      )
    } else {
      authButton = (
        <button type="button" onClick={this.isLoggedChange}>
          Login
        </button>
      )
    }
    return (
      <div className="container">
        <Welcome />
        {authButton}
      </div>
    )
  }
}

export default App

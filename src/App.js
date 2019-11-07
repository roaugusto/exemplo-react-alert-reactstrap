import React, { Component } from 'react';
import { Alert, Button } from 'reactstrap';

import './App.css';
export default class App extends Component {

  state = {
    textButton: 'Abrir Alert',
    isAlertVisible: false
  }

  handleClickAlert = () => {
    const newMessage = !this.state.isAlertVisible ? 'Fechar Alert' : 'Abrir Alert'
    this.setState(
      {
        isAlertVisible: !this.state.isAlertVisible,
        textButton: newMessage,
      })
  }

  render() {
    const { textButton, isAlertVisible } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <Button
            onClick={this.handleClickAlert}
            color="primary mb-3">{textButton}</Button>

          <Alert className="custom-alert"
            color="primary"
            isOpen={isAlertVisible}
            toggle={this.handleClickAlert}>
            Mensagem de teste do alert!
          </Alert>
        </header>
      </div>
    )
  }
}

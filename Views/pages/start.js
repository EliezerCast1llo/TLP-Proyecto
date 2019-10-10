import { Component } from 'react'
import App from './App'
import Head from 'next/head'


export default class extends Component {
  state = {
    input: '',
    message: null
  }

  componentDidMount() {
    // start listening the channel message
    global.ipcRenderer.on('message', this.handleMessage)
  }

  componentWillUnmount() {
    // stop listening the channel message
    global.ipcRenderer.removeListener('message', this.handleMessage)
  }

  handleMessage = (event, message) => {
    // receive a message from the main process and save it in the local state
    this.setState({ message })
  }

  handleChange = event => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    global.ipcRenderer.send('message', this.state.input)
    this.setState({ message: null })
  }

  render() {
    return (
      <>
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
          <title>ColorBlock</title>
        </Head>
        <App />
      </>

    )
  }
}

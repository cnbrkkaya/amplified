import { API } from 'aws-amplify'
import './App.css'

function App() {
  const sendRequest = async () => {
    var URL =
      'https://xjo2p0za8l.execute-api.us-east-1.amazonaws.com/dev/products'
    var otherParams = {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'canberk-fetch',
      }),
      method: 'POST',
    }

    fetch(URL, otherParams)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        window.alert('TEBRIKLER')
      })
      .catch(function (err) {
        window.alert(err)
      })
  }
  const amplifyRequest = async () => {
    API.post('apiCors', '/products', {
      body: {
        name: 'canberk-amplify',
      },
    })
      .then((result) => {
        this.todos = JSON.parse(result.body)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={amplifyRequest}>AmplifyAPI</button>
        <button onClick={sendRequest}>FetchAPI</button>
      </header>
    </div>
  )
}

export default App

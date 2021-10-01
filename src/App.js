import logo from './logo.svg'
import './App.css'

function App() {
  const sendRequest = async () => {
    var URL = 'https://xjo2p0za8l.execute-api.us-east-1.amazonaws.com/dev/items'
    var otherParams = {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'canberk',
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
  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={sendRequest}>Click</button>
      </header>
    </div>
  )
}

export default App

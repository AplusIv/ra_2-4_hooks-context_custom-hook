import './App.css'
import FetchSuccess from './components/FetchSuccess'
import FetchError from './components/FetchError'
import FetchLoading from './components/FetchLoading'

function App() {
  // const url = 'http://localhost:7070';
  const url = 'https://custom-hook-backend.onrender.com';
  const opts = ['/data', '/loading', '/error'];

  return (
    <>
      <FetchSuccess url={url} opts={opts}/>
      <FetchLoading url={url} opts={opts}/>
      <FetchError url={url} opts={opts}/>
    </>
  )
}

export default App

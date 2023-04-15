import Listing from './components/Listing';
import data from './components/data'

const items = JSON.parse(data.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t"));

function App() {
  return (
    <Listing items={items} />   
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import { Routes, BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <br></br>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Welcome to the first version of the EnControl Site!
        </p>
      </div>
      <p className="read-the-docs">
        This is barely even a v0.1
      </p>
    </Router>
  );
  
}

export default App

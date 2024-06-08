
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './screens/Auth/Signup'
import Home from './screens/Home/Home'
import Layout from './components/Layout'
import './index.css';



function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route element={<Layout />}>
      <Route path="/home" element={<Home />} />
      </Route>
  
    </Routes>
  </Router>
  )
}

export default App

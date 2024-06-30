import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './screens/Auth/Signup';
import Home from './screens/Home/Home';
import Layout from './components/Layout';
import Analytics from './screens/Analytics/index';
import './index.css';

import AdIdea from './screens/adIdea';
import Automation from './screens/automation';
import CreateAd from './screens/createAd';
import Landing from './screens/landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/adidea" element={<AdIdea />} />
          <Route path="/createad" element={<CreateAd />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

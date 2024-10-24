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
import PostIdea from './screens/postIdea';
import Drafts from './screens/drafts';
import Pricing from './screens/landing/pricing/Pricing';
import Aboutus from './screens/landing/aboutus/aboutus';
import Topbar from './components/topbar';
import LayoutWithTopbar from './components/layoutwith';
import Blog from './screens/landing/blog';
import ContactUs from './screens/landing/contactus';
import Features from './screens/landing/features';
import Integrations from './screens/integrations';
import CreatePosts from './screens/createPosts';
import Maximize from './screens/landing/blog/blogsDetails/first';
import Future from './screens/landing/blog/blogsDetails/second';
import Driven from './screens/landing/blog/blogsDetails/third';
import Click from './screens/landing/blog/blogsDetails/fourth';
import Ultimate from './screens/landing/blog/blogsDetails/fifth';
import Scoring from './screens/landing/blog/blogsDetails/sixth';
import AdsDrafts from './screens/AdsDrafts';
import PublishAds from './screens/publishads';
import Rejected from './screens/rejected';
import PublishPosts from './screens/publishPosts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route element={<LayoutWithTopbar/>} >
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog/maximize" element={<Maximize />} />
        <Route path="/blog/future" element={<Future />} />
        <Route path="/blog/driven" element={<Driven />} />
        <Route path="/blog/click" element={<Click />} />
        <Route path="/blog/ultimate" element={<Ultimate />} />
        <Route path="/blog/scoring" element={<Scoring />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/postidea" element={<PostIdea />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/adsdrafts" element={<AdsDrafts />} />
          <Route path="/publishads" element={<PublishAds />} />
          <Route path="/rejected" element={<Rejected />} />
          <Route path="/published-posts" element={<PublishPosts />} />
          <Route path="/adidea" element={<AdIdea />} />
          <Route path="/createad" element={<CreateAd />} />
          <Route path="/createposts" element={<CreatePosts />} />
          <Route path="/integrations" element={<Integrations />} />
          
     
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

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
import Privacy from './screens/legalScreens/Privacy';
import Terms from './screens/legalScreens/Terms';
import Cancellation from './screens/legalScreens/Cancellations';
import DeleteAccount from './screens/deactivate';
import ProtectedRoute from './components/protectedRoute';
import GuestRoute from './components/guestRoute';
import Auth from './screens/Auth';
import Schedule from './screens/schedule';
import { PlatformProvider } from './constants/activePlatform';
import Privacy2 from './screens/legalScreens/Privacy2';
import Terms2 from './screens/legalScreens/Terms2';




function App() {
  return (
    <PlatformProvider>
    <Router>
      <Routes>
      <Route path="/signup" element={<Signup />} />
<Route path="/auth" element={<Auth />} />
        <Route element={<LayoutWithTopbar />}>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cancellation" element={<Cancellation />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog/maximize" element={<Maximize />} />
          <Route path="/blog/future" element={<Future />} />
          <Route path="/blog/driven" element={<Driven />} />
          <Route path="/blog/click" element={<Click />} />
          <Route path="/blog/ultimate" element={<Ultimate />} />
          <Route path="/blog/scoring" element={<Scoring />} />
        </Route>
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/home" element={<CreateAd />} />
          <Route path="/privacy-policy" element={<Privacy2 />} />
          <Route path="/terms-and-conditions" element={<Terms2 />} />
          <Route path="/postidea" element={<PostIdea />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/data-deletion" element={<DeleteAccount />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/adsdrafts" element={<AdsDrafts />} />
          <Route path="/publishads" element={<PublishAds />} />
          <Route path="/rejected" element={<Rejected />} />
          <Route path="/published-posts" element={<PublishPosts />} />
          <Route path="/adidea" element={<AdIdea />} />
          <Route path="/createposts" element={<CreatePosts />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </Router>
    </PlatformProvider>
  );
}

export default App;

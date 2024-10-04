import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import AuthPage from './Components/AuthPage';
import Homepage from './Components/Homepage';
import Restaurants from './Components/Restaurants';
import Cafes from './Components/Cafes';
import Food from './Components/Food';
import About from './Components/About';
import Contact from './Components/Contact';
import Special from './Components/Special';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleBackToHomepage = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onLoginClick={handleLoginClick} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/cafes" element={<Cafes />} />
          <Route path="/food" element={<Food />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/special" element={<Special />} />
          <Route 
            path="/login" 
            element={
              <AuthPage 
                onLoginClick={handleLoginClick} 
                onBack={handleBackToHomepage} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

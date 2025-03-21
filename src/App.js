import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ElectricitePlaco from './components/ElectricitePlaco';
import Cuisine from './components/Cuisine';
import Sdb from './components/Sdb';
import MenuiserieInterieur from './components/MenuiserieInterieur';
import MenuiserieExterieur from './components/MenuiserieExterieur';
import Terrasse from './components/Terrasse';
import Bardage from './components/Bardage';
import NotFound from './components/NotFound';
import './styles/App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
          {/* Electricite route */}
          <Route path="/electricite-platre" element={<ElectricitePlaco />} />
          {/* Cuisine route */}
          <Route path="/cuisine" element={<Cuisine />} />
          {/* Sdb route */}
          <Route path="/salle-de-bain" element={<Sdb />} />
          {/* Menuiserie intérieur route */}
          <Route path="/menuiserie-interieur" element={<MenuiserieInterieur />} />
          {/* Menuiserie extérieur route */}
          <Route path="/menuiserie-exterieur" element={<MenuiserieExterieur />} />
          {/* Terrasse route */}
          <Route path="/terrasse" element={<Terrasse />} />
          {/* Bardage route */}
          <Route path="/bardage" element={<Bardage />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
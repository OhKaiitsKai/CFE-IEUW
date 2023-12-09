import './App.scss'
import Principal from './pages/Principal'
import Landing from './pages/Landing'
import Simulator from './pages/Simulator'
import SignUpLogIn from './pages/SignUpLogIn'
import Location from './pages/Location'
import CFEDesc from './pages/CFEDesc'
import Servicios from './pages/Servicios'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/location" element={<Location />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/cfedesc" element={<CFEDesc />} />
        <Route path="/signuplogin" element={<SignUpLogIn />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

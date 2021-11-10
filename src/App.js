import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

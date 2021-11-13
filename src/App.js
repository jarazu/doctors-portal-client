import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import Authprovider from './contexts/Authprovider/Authprovider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
          <Route exact path="/register">
              <Register />
          </Route>
          <PrivateRoute path="/dashboard">
              <Dashboard />
          </PrivateRoute>

          <PrivateRoute exact path="/appointment">
              <Appointment />
          </PrivateRoute>
{/*           
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} /> */}
        </Switch>
      </BrowserRouter>
    </Authprovider>
    </div>
  );
}

export default App;

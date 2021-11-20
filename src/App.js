import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Pages/Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './Pages/Dashboard/Payment/Payment';
import Dashboard from './Pages/Dashboard/Dasboard/Dashboard';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import AddPeople from './Pages/Dashboard/AddPeople/AddPeople';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/appointment"
              element={<PrivateRoute><Appointment /></PrivateRoute>}
            />
            <Route
              path="/dashboard"
              element={<PrivateRoute><Dashboard /></PrivateRoute>}
            >
              <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>
              </Route>
              <Route path="/dashboard/payment/:appointmentId" element={<Payment></Payment>}>
              </Route>
              <Route
                path="/dashboard/makeAdmin"
                element={<AdminRoute>
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>}
              />

              <Route
                path="/dashboard/addDoctor"
                element={<AdminRoute>
                  <AddDoctor></AddDoctor>
                </AdminRoute>}
              />
              <Route
                path="/dashboard/addPeople"
                element={<AdminRoute>
                  <AddPeople></AddPeople>
                </AdminRoute>}
              />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

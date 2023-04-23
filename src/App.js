import "./App.css";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import WatchVideo from "./pages/watch/WatchVideo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
   const { user } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/register"
            element={!user ? <SignUp /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          {user && (
            <>
              <Route exact path="/movies" element={<Home type="movies" />} />
              <Route exact path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<WatchVideo />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;

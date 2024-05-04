import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";

function App() {

  const user = false;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />
          <Route path="/home" element={user ? <Home/> :  <Navigate to="/login" />}/>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          <Route path="*" element={<NotFound/>}/>



        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

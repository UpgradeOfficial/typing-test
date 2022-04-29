import "./App.css";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import CreateItem from "./pages/CreateItem"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Join from "./pages/Join";
import Chat from "./pages/Chat";


function App() {
  

  return (

    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateItem />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/join" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
          
        </Routes>
     
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

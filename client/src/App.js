import { Button } from 'antd';
import './stylesheets/theme.css';
import './stylesheets/alignments.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/common/Login";
import Register from "./pages/common/Register";
import "./stylesheets/alignments.css";
import "./stylesheets/custom.css";
import "./stylesheets/text.css";
import "./stylesheets/theme.css";
import "./stylesheets/form.css";
import ProtectedRoute from './components/ProtectedRoute';
import Home from "./pages/common/home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/" element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

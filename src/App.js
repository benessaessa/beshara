import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from './pages/Users';
function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

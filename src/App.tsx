import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import SalesSection from './components/Sales';
import Login from './pages/Login'; // make sure this path matches your project structure

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white text-gray-800">
              <Navbar />
              <CategoryBar />
              <SalesSection />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

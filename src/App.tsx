import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import SalesSection from './components/Sales';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/api/auth/geo-check/')
      .then(res => res.json())
      .then(data => {
        if (data.country && data.country !== 'CZ') {
          window.location.href = 'https://www.visitczechia.com/';
        }
      })
      .catch(err => {
        console.error('Geolocation check failed:', err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <CategoryBar />
      <SalesSection />
    </div>
  );
}

export default App;

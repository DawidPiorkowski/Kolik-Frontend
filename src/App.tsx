import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import SalesSection from './components/Sales';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <CategoryBar />
      <SalesSection />
    </div>
  );
}

export default App;

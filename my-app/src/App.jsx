import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './components/pages/About';
import { Liked } from './components/pages/Liked';



function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/liked" element={<Liked />}  />

     </Routes>
    </div>
  );
}

export default App;

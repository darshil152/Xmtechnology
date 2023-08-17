import './App.css';
import Career from './Career';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobform from './Jobform';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/jobform" element={<Jobform />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


import './App.css';
import Career from './Career';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobform from './Jobform';
import ReactDeveloper from './HireDeveloper/ReactDeveloper';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/jobform" element={<Jobform />} />
          <Route path="/hire/react" element={<ReactDeveloper />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


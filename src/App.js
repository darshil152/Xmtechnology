import './App.css';
import Career from './Career';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobform from './Jobform';
import ReactDeveloper from './HireDeveloper/ReactDeveloper';
import Service from './Service';
import Portfolio from './Portfolio';
import About from './About';
import Python from './HireDeveloper/Python';
import Node from './HireDeveloper/Node';
import Android from './HireDeveloper/Android';
import Ios from './HireDeveloper/Ios';
import Ui from './HireDeveloper/ui';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/jobform" element={<Jobform />} />

          <Route path="/hire/react" element={<ReactDeveloper />} />
          <Route path="/hire/python" element={<Python />} />
          <Route path="/hire/node" element={<Node />} />
          <Route path="/hire/android" element={<Android />} />
          <Route path="/hire/ios" element={<Ios />} />

          <Route path="/hire/ui" element={<Ui />} />

          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


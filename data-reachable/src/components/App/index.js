import Landing from '../Landing';
import Pages from '../Pages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/project">
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/Pages" element={<Pages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

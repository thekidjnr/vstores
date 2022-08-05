import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Theme1 from "./pages/theme1/Theme1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="theme1" element={<Theme1 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

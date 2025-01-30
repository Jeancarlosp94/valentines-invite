import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import ButtonGame from "./components/ButtonGame";
import Invitation from "./Pages/invitation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ButtonGame />} />
        <Route path="/invitation" element={<Invitation />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/login" element={<>Login</>} />
          <Route path="/profile" element={<>Profile</>} />
          <Route path="/friends" element={<>Friends</>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

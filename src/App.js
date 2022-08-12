import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;

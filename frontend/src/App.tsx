import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.scss";
import { Routes, Route } from "react-router-dom";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ErrorScreen,
} from "./components/screens/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/*" element={<ErrorScreen />} />
    </Routes>
  );
}

export default App;

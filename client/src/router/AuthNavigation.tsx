import { Routes, Route } from "react-router-dom";
import {
  ErrorScreen,
  LoginScreen,
  RegisterScreen,
} from "../components/screens";

const AuthNavigation: React.FC<{ login: () => void }> = ({ login }) => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen login={login} />} />
      <Route path="/login" element={<LoginScreen login={login} />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/*" element={<ErrorScreen />} />
    </Routes>
  );
};

export default AuthNavigation;

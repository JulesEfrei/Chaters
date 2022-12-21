import { Routes, Route } from "react-router-dom";
import { HomeScreen, ErrorScreen } from "../components/screens";

const AppNavigation: React.FC<{ logout: () => void }> = ({ logout }) => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen logout={logout} />} />
      <Route path="/home" element={<HomeScreen logout={logout} />} />
      <Route path="/*" element={<ErrorScreen />} />
    </Routes>
  );
};

export default AppNavigation;

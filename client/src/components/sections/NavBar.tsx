import React, { useState } from "react";
import { useNavigate } from "react-router";
import { generateToast } from "../../utils/formVerification";
import { IconButton } from "../atoms";
import "./navBar.scss";

interface Props {
  logoutState: () => void;
}

const NavBar: React.FC<Props> = ({ logoutState }) => {
  const navigation = useNavigate();

  const logout: () => void = () => {
    localStorage.clear();
    logoutState();
    navigation("/login");
  };

  const [showUser, setShowUser] = useState<Boolean>(false);

  console.log("NavBar");

  return (
    <section className="section-navbar">
      <div className="top">
        <div>
          <IconButton icon="msg.svg" active={true} onClick={() => {}} />
        </div>
        <div>
          <IconButton
            icon="setting.svg"
            onClick={() =>
              generateToast("Features does not exist yet.", "info")
            }
          />
        </div>
        <div>
          <IconButton icon="logout.svg" onClick={() => logout()} />
        </div>
      </div>
      <div className="bottom">
        <IconButton icon="user.svg" onClick={() => setShowUser(!showUser)} />
        {showUser ? (
          <div className="user-info">
            <h2>User's information</h2>
            <h4>Name: {JSON.parse(localStorage.getItem("data")!).name}</h4>
            <h4>Mail: {JSON.parse(localStorage.getItem("data")!).email}</h4>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default NavBar;

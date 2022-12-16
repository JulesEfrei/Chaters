import React, { useState } from "react";
import { useNavigate } from "react-router";
import { generateToast } from "../../utils/formVerification";
import { IconButton } from "../atoms";
import "./navBar.scss";

interface Props {}

const NavBar: React.FC<Props> = ({}) => {
  const navigation = useNavigate();

  const logout: () => void = () => {
    localStorage.clear();
    navigation("/login");
  };

  const [showUser, setShowUser] = useState<Boolean>(false);

  return (
    <section className="section-navbar">
      <div className="top">
        <div>
          <IconButton icon="msg.png" active={true} onClick={() => {}} />
        </div>
        <div>
          <IconButton
            icon="setting.png"
            onClick={() =>
              generateToast("Features does not exist yet.", "info")
            }
          />
        </div>
        <div>
          <IconButton icon="logout.png" onClick={() => logout()} />
        </div>
      </div>
      <div className="bottom">
        <IconButton icon="user.png" onClick={() => setShowUser(!showUser)} />
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

import React from "react";
import { useNavigate } from "react-router";
import { IconButton } from "../atoms";
import "./navBar.scss";

interface Props {}

const NavBar: React.FC<Props> = ({}) => {
  return (
    <section className="section-navbar">
      <div className="top">
        <div>
          <IconButton icon="logo.png" onClick={() => {}} />
        </div>
        <div>
          <IconButton icon="logo.png" onClick={() => {}} />
        </div>
        <div>
          <IconButton icon="logo.png" onClick={() => {}} />
        </div>
      </div>
      <div className="bottom">
        <IconButton icon="logo.png" onClick={() => {}} />
      </div>
    </section>
  );
};

export default NavBar;

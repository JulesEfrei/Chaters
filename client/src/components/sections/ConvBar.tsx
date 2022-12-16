import React from "react";
import "./convBar.scss";
import { ConvBlock } from "../molecules/";
import convData from "../../types/convDataType";

interface Props {
  convList: convData[];
  onClick: (convData: convData) => void;
}

const ConvBar: React.FC<Props> = ({ convList, onClick }) => {
  return (
    <section className="section-conv-bar">
      <div className="button-container">
        <button>New Conversation</button>
      </div>
      {convList !== null
        ? convList.map((elm, index) => {
            return (
              <ConvBlock
                name={elm.user2!}
                selected={false}
                onClick={() => onClick(elm)}
                key={elm.convId}
              />
            );
          })
        : null}
    </section>
  );
};

export default ConvBar;

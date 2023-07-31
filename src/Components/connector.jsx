import React, { useState } from "react";
import Data from "../services/data";

import "./style.css";

export default function Connector({ name, flag, index }) {
  const [indicator, setIndicator] = useState(flag);
  const handleClick = () => {
    console.log("handle click called");
    let x = Data.updateConnectorMetaData(flag, index);
    setIndicator(x);
  };

  const returnClassName = (param) => {
    switch (param) {
      case "disabled":
        return "flagDisabled connector";
      case "active":
        return "flagActive connector";
      case "inactive":
        return "flagInactive connector";
    }
  };
  return (
    <div>
      <div className={returnClassName(indicator)} onClick={handleClick}>
        {name}
      </div>
    </div>
  );
}

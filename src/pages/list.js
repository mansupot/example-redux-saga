import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push("/")}>Back</button>
    </div>
  );
};

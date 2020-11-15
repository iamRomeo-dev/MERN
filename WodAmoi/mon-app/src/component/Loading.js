import React from "react";
import loading from "../img/loading.svg";

const Loading = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
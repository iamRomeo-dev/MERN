import React, { useState, useEffect } from "react";
import Test2 from "./Test2";
import  {ReactComponent as ImgDelete} from "./../img/loading.svg";
const Test = () => {
  const [count, setCount] = useState("");

  const onDeincrement = (e) => {
    setCount((chiffre) => chiffre - 1);
  };

  const onIncrement = (e) => {
    setCount((chiffre) => chiffre + 1);
  };

  const [nom, setNom] = useState("");
  const onNomChange = (e) => {
    setNom(e.target.value);
  };

  useEffect(() => {
    document.title = "Nom :  " + nom;
  }, [nom]);

  return (
    <>
      <div className="mt-2 ml-2">
        <button onClick={onDeincrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
      </div>
      <form className="mt-2 ml-2">
        <label>
          Nom :
          <input
            type="text"
            value={nom}
            onChange={onNomChange}
            className="ml-2"
          />
        </label>
      </form>
      <div>
        <Test2 />
        {/* <Test3 /> */}
        <ImgDelete  title="Delete"/>
      </div>
    </>
  );
};

export default Test;

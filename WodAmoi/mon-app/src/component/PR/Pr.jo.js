import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import DataWodService from "../../services/DataMvt";
import  {ReactComponent as ImgDelete} from "../../img/ImgDelete.svg";
import RefreshButton from "../RefreshButton";
import AddMvt from "./AddMvt";

const Pr = (props) => {
  const [mvts, setMvts] = useState([]);
  const [currentMvt, setCurrentMvt] = useState(null);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    getMvts();
  }, []);

  const getMvts = () => {
    DataWodService.getAll()
      .then(response => {
        setMvts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setMvt = (mvt) => { setCurrentMvt(mvt) };
  
  //format date
  const DateOfThePr = new Intl.DateTimeFormat(undefined).format(mvts.updatedAt);

  //search filter bar
  const filteredTasks = mvts.filter (mvt => {
    return mvt.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="PositionDansHerder">
      <Form.Group className="searchBarContainer">
        <Form.Control className="text-center"type="text" placeholder="Search..." onChange={ e => setSearch(e.target.value)}/>
      </Form.Group>

      <div className="d-flex justify-content-around">
        <RefreshButton />
        <AddMvt />
      </div>

      <div className="container mt-4 mb-4">
        {filteredTasks.filter((name) => name.firstname === "jo").map(
          (filteredMvt, index) => (
            <div className="wod-container">
              <ul className="list-group col">
                {currentMvt ? (
                  <li className="titleContainer containerBtnSvgPoints list-group-item shadow-lg pt-1 pb-1"
                    onClick={() => setMvt(filteredMvt, index)}
                    key={index}
                  >
                    {filteredMvt.title.toUpperCase()}
                    <Link
                      to={"/mouvements/" + currentMvt.id}
                      className="btnSvgPoints"
                    >
                    <ImgDelete className="btnSvgPoints" title="Delete"/>
                    </Link>
            
                  </li>
                ) : (
                  <li className="titleContainer list-group-item shadow-lg pt-1 pb-1"
                    onClick={() => setMvt(filteredMvt, index)}
                    key={index}>
                      {filteredMvt.title.toUpperCase()}
                  </li>
                )}
                  <li className="descriptionContainer list-group-item shadow-lg">
                    {DateOfThePr}
                  </li>
                  <li className="descriptionContainer list-group-item shadow-lg">
                  {filteredMvt.weight}
                  </li>
              </ul>
            </div>
          )
        )} 
      </div>
    </div>
  );
};

export default Pr;

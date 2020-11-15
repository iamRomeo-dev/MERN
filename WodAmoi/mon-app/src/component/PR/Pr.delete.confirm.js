import React, { useState, useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import DataWodService from "../../services/DataMvt";

const Tutorial = props => {
  const initializedMvt = {
    id: null,
    title: "",
    };
  
    const [currentMvt, setCurrentMvt] = useState(initializedMvt);
  
    const getTutorial = id => {
      DataWodService.get(id)
      .then(response => {
        setCurrentMvt(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    };
  
    useEffect(() => {
      getTutorial(props.match.params.id);
    }, [props.match.params.id]);

    const deleteMvt = () => {
      DataWodService.remove(currentMvt.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/mouvementsTabs");
      })
      .catch(e => {
        console.log(e);
      });
    };

  return (
    <div className="PositionDansHerder">
      <Jumbotron className="m-5 text-center">
        <p>
          Est-tu sûre de vouloir supprimer {currentMvt.title} ?
        </p>
        <p>
          <Button variant="danger" onClick={deleteMvt}>Delete</Button>
          <Link
          to="/mouvementsTabs"
        >
        <Button variant="primary m-4">Back</Button>
        </Link>
        </p>
      </Jumbotron>
    </div>

    
  )
};

export default Tutorial;

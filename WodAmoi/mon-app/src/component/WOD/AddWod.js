import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DataWod from "../../services/DataWod";

const AddWod = () => {
  //Pour react-bootstrap/Modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   //EO Pour react-bootstrap/Modal 

  const initialDataWod = {
    id: null,
    title: "",
    team: "",
    description: "",
    duration: ""
  };
  const [wod, setWod] = useState(initialDataWod);
  const [submitted, setSubmitted] = useState(false);
 
  const handleInputChange = event => {
    const { name, value } = event.target;
    setWod({ ...wod, [name]: value });
  };

  const saveWod = () => {
    var data = {
      title: wod.title,
      team: wod.team,
      description: wod.description,
      duration: wod.duration

    };

    DataWod.create(data)
      .then(response => {
        setWod({
          id: response.data.id,
          title: response.data.title,
          team: response.data.team,
          description: response.data.description,
          duration: response.data.duration
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
      <Button variant="btn btn-dark mt-4 mb-4 rounded border-0 btn-lg px-3" onClick={handleShow}>
        Create
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>PERSONAL RECORDS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="submit-form">
            {submitted ? (
              <div>
                <h4 className="text-center">Ton PR a été ajouté!</h4>
                <h5 className="text-center text-muted">Refresh ta page</h5>
              </div>
            ) : (
              <div>

          <div className="form-group">
            <label htmlFor="description">Nom du WOD</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={wod.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="team">Team</label>
            <select   type="text"
              className="form-control"
              id="team"
              required
              value={wod.team}
              onChange={handleInputChange}
              name="team">
              <option value="">...</option>
              <option value="non">Solo</option>
              <option value="oui">Team</option>
            </select>
          </div>

          <div class="form-group">
            <label htmlFor="title">Description du WOD</label>
            <textarea  type="text"
              className="form-control"
              id="title"
              required
              value={wod.title}
              onChange={handleInputChange}
              name="title"
              rows="3"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="duration">Durée</label>
            <select   type="text"
              className="form-control"
              id="duration"
              required
              value={wod.duration}
              onChange={handleInputChange}
              name="duration">
              <option value="">...</option>
              <option value="court">Court</option>
              <option value="moyen">Moyen</option>
              <option value="long">Long</option>
            </select>
          </div>

          <button onClick={saveWod} className="btn btn-dark mt-4 mb-4 rounded border-0 btn-lg px-5">
            Valider
          </button>
        </div>
      )}
    </div>
    </Modal.Body>
       
      </Modal>
    </>
  );
};

export default AddWod;

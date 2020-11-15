import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DataMvt from "../../services/DataMvt";

const AddMvt = () => {
  //react-bootstrap/Modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   //EO react-bootstrap/Modal 

  const initialDataMvt = {
    id: null,
    title: "",
    weight: "",
    firstname: ""
  };

  const [mvt, setMvt] = useState(initialDataMvt);
  const [submitted, setSubmitted] = useState(false);
 
  const handleInputChange = event => {
    const { name, value } = event.target;
    setMvt({ ...mvt, [name]: value });
  };

  const saveMvt = () => {
    var data = {
      title: mvt.title,
      weight: mvt.weight,
      firstname: mvt.firstname
    };

    DataMvt.create(data)
      .then(response => {
        setMvt({
          id: response.data.id,
          title: response.data.title,
          weight: response.data.weight,
          firstname: response.data.firstname
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
                  <label htmlFor="duration">Ton prénom</label>
                  <select   type="text"
                    className="form-control"
                    id="firstname"
                    required
                    value={mvt.firstname}
                    onChange={handleInputChange}
                    name="firstname">
                    <option value="">...</option>
                    <option value="jo">Jo</option>
                    <option value="romeo">Roméo</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="title">Mouvement</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={mvt.title}
                    onChange={handleInputChange}
                    name="title"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="weight">Poids</label>
                  <input
                    type="text"
                    className="form-control"
                    id="weight"
                    required
                    value={mvt.weight}
                    onChange={handleInputChange}
                    name="weight"
                  />
                </div>
               
                <button onClick={saveMvt} className="btn btn-dark mt-4 mb-4 rounded border-0 btn-lg px-5">
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

export default AddMvt;

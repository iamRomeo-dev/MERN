import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const Home = () => {
  return (
    <div className="containerHome mt-4">
      <Link
        to="/workouts/court"
        className="imagesHomeLink btn rounded border-0"
      >
        <Card className="imagesHome">
          <Card.Img variant="top" src={img1} />
        </Card>
      </Link>

      <Link
        to="/workouts/moyen"
        className="imagesHomeLink text-center btn rounded border-0"
      >
        <Card className="imagesHome" >
          <Card.Img variant="top" src={img2} />
        </Card>
      </Link>

      <Link
        to="/workouts/long"
        className="imagesHomeLink btn rounded border-0"
      >
        <Card className="imagesHome">
          <Card.Img variant="top" src={img3} />
        </Card>
      </Link>

        <Link
          to="/mouvementsTabs"
          className="btn btn-dark mt-4 mb-4 rounded border-0 btn-lg px-5"
        >
          My PR
        </Link>

        {/* <Link
          to="/test"
          className="btn btn-dark mt-4 mb-4 rounded border-0 btn-lg px-5"
        >
          Test
        </Link>
        <Link
          to="/profile"
          className="btn btn-dark mt-4 mb-4 rounded border-0 btn-lg px-5"
        >
          Test
        </Link> */}
    </div>
  );
};

export default Home;

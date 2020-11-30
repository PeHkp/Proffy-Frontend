import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import LogoImg from "../../assets/images/logo.svg";
import LandingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import { useState, useEffect } from "react";
import api from './../../services/api';

const LadingPage: React.FC = () => {
  const [TotalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get("connectios").then(r => {
            const {total} = r.data

            setTotalConnections(total)
        })
    },[])

  return (
    <div id="page-landing">
      <div id="page-landing-container" className="container">
        <div className="logo-container">
          <img src={LogoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={LandingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link className="study" to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link className="give-classes" to="/give-classes">
            <img src={giveClassesIcon} alt="Dar Aula" />
            Dar Aula
          </Link>
        </div>
        <span className="total-connections">
          Total de {TotalConnections} conexoes ja realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default LadingPage;

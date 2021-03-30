import React from "react";
import "./styles.css";
import facebook from "../../assets/images/facebook-log.svg";
import phone from "../../assets/images/phone-logo.svg";
import email from "../../assets/images/email-logo.svg";

const HiringDetails = ({ employee, handleClick }) => {
  return (
    <div className="HiringDetails">
      <div className="HiringDetails__profile">
        <img
          src="http://via.placeholder.com/80x80"
          alt={"Avatar " + employee.nombre}
          className="Table__avatar"
          width="30"
        />
        <div className="HiringDetails__profile-experience">
          <h2>{employee.nombre}</h2>
          <h3>{employee.puesto}</h3>
        </div>
      </div>
      <div className="HiringDetails__profile-contact">
        <img src={facebook} alt="Facebook Logo" />
        <img src={phone} alt="Phone" />
        <img src={email} alt="Email" />
      </div>
      <div className="HiringDetails__profile-details">
        <div className="HiringDetails__profile-details-item">
          <strong>Preparatoria:</strong>
          <span>{employee.preparatoria ? "SI" : "NO"}</span>
        </div>
        <div className="HiringDetails__profile-details-item">
          <strong>Percepción Mensual</strong>
          <span>$2,000</span>
        </div>
        <div className="HiringDetails__profile-details-item">
          <strong>Edad</strong>
          <span>{employee.edad} Años</span>
        </div>
      </div>
      <button className="HiringDetails__times" onClick={() => handleClick()}>
        x
      </button>
    </div>
  );
};

export default HiringDetails;

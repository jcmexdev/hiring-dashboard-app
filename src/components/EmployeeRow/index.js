import React from "react";

const EmployeeRow = ({ item, handleSelected }) => {
  return (
    <tr key={item.id}>
      <td>
        <img
          src="http://via.placeholder.com/40x40"
          alt="Avatar"
          className="Table__avatar"
          width="30"
        />
      </td>
      <td>
        <strong>{item.nombre}</strong>
      </td>
      <td>{item.puesto}</td>
      <td>{item.experiencia} Años</td>
      <td>{item.edad} Años</td>
      <td>
        <button className="Table__button" onClick={() => handleSelected(item)}>
          Ver Info
        </button>
      </td>
    </tr>
  );
};

export default EmployeeRow;

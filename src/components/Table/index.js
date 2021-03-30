import React, { useState, useEffect } from "react";
import EmployeeRow from "../EmployeeRow";
import PaginationButton from "../PaginationButton";
import "./styles.css";

const Table = (props) => {
  const [state, setState] = useState({ data: [], page: 1 });

  const createPagination = (data) => {
    const top = Math.ceil(data.length / 10);
    const length = data.length;
    let pagination = {};
    for (let index = 0; index < top; index++) {
      if (index + 1 >= top) {
        pagination = {
          ...pagination,
          [index + 1]: data.slice(index * 10, length),
        };
      } else {
        pagination = {
          ...pagination,
          [index + 1]: data.slice(index * 10, index * 10 + 10),
        };
      }
    }
    return pagination;
  };

  const handleClick = (e) => {
    setState({
      ...state,
      page: e.target.value,
    });
  };

  const renderPages = () => {
    return Object.keys(state.data).map((el) => (
      <PaginationButton
        key={el}
        currentPage={state.page}
        pageNumber={el}
        setPage={handleClick}
      />
    ));
  };

  useEffect(() => {
    let paginatedData = createPagination(props.items);
    setState((state) => {
      return {
        ...state,
        data: paginatedData,
      };
    });
  }, [props.items]);

  const handlePaginationItems = () => {
    if (Object.keys(state.data).length === 0) return;
    return state.data[state.page].map((el) => {
      return <EmployeeRow item={el} handleSelected={props.handleSelected} />;
    });
  };

  return (
    <div className="Table">
      <div className="Table__title">
        <h3>Lista de personal</h3>
      </div>
      <table>
        <thead className="Table__header">
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Experiencia</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="Table__body">{handlePaginationItems()}</tbody>
      </table>
      <div className="Table__pagination">{renderPages()}</div>
    </div>
  );
};

export default Table;

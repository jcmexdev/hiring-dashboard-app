import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import HiringDetails from "../components/HiringDetails";
import Table from "../components/Table";
import Search from "../components/Search";
import * as Api from "../utils/Api";
import "./Home.css";

function App() {
  const data = [
    {
      _id: 1,
      experiencia: 39,
      edad: 57,
      puesto: "Speech Pathologist",
      preparatoria: false,
      nombre: "Tab Varden",
    },
    {
      _id: 2,
      experiencia: 29,
      edad: 54,
      puesto: "Senior Quality Engineer",
      preparatoria: false,
      nombre: "Dale Catmull",
    },
    {
      _id: 3,
      experiencia: 27,
      edad: 57,
      puesto: "VP Product Management",
      preparatoria: false,
      nombre: "Myrah Ruslin",
    },
    {
      _id: 4,
      experiencia: 36,
      edad: 19,
      puesto: "Developer IV",
      preparatoria: true,
      nombre: "Kaylee Fluin",
    },
    {
      _id: 5,
      experiencia: 32,
      edad: 50,
      puesto: "Junior Executive",
      preparatoria: true,
      nombre: "Ulrikaumeko Innwood",
    },
    {
      _id: 6,
      experiencia: 22,
      edad: 21,
      puesto: "Senior Sales Associate",
      preparatoria: true,
      nombre: "Lindy Acome",
    },
    {
      _id: 7,
      experiencia: 13,
      edad: 58,
      puesto: "Director of Sales",
      preparatoria: true,
      nombre: "Isa Longmead",
    },
    {
      _id: 8,
      experiencia: 34,
      edad: 38,
      puesto: "Product Engineer",
      preparatoria: true,
      nombre: "Vinni Stannering",
    },
    {
      _id: 9,
      experiencia: 3,
      edad: 51,
      puesto: "Account Coordinator",
      preparatoria: false,
      nombre: "Vlad Amner",
    },
    {
      _id: 10,
      experiencia: 37,
      edad: 56,
      puesto: "Financial Advisor",
      preparatoria: false,
      nombre: "Burty Hatcher",
    },
    {
      _id: 11,
      experiencia: 14,
      edad: 37,
      puesto: "Recruiting Manager",
      preparatoria: false,
      nombre: "Thorvald Ganter",
    },
    {
      _id: 12,
      experiencia: 32,
      edad: 38,
      puesto: "Civil Engineer",
      preparatoria: false,
      nombre: "Bowie Drayn",
    },
    {
      _id: 13,
      experiencia: 3,
      edad: 31,
      puesto: "Accountant III",
      preparatoria: true,
      nombre: "Tucky Swayton",
    },
    {
      _id: 14,
      experiencia: 37,
      edad: 60,
      puesto: "Financial Advisor",
      preparatoria: false,
      nombre: "Jeni Sword",
    },
    {
      _id: 15,
      experiencia: 31,
      edad: 20,
      puesto: "Associate Professor",
      preparatoria: true,
      nombre: "Daffie Delong",
    },
    {
      _id: 16,
      experiencia: 25,
      edad: 19,
      puesto: "Recruiting Manager",
      preparatoria: false,
      nombre: "Addia Eastment",
    },
    {
      _id: 17,
      experiencia: 25,
      edad: 42,
      puesto: "Quality Engineer",
      preparatoria: false,
      nombre: "Noe Withey",
    },
    {
      _id: 18,
      experiencia: 13,
      edad: 58,
      puesto: "Automation Specialist III",
      preparatoria: false,
      nombre: "Norine Teare",
    },
    {
      _id: 19,
      experiencia: 28,
      edad: 41,
      puesto: "Help Desk Technician",
      preparatoria: true,
      nombre: "Russell Pizzie",
    },
    {
      _id: 20,
      experiencia: 6,
      edad: 36,
      puesto: "Nurse Practicioner",
      preparatoria: false,
      nombre: "Louie Strickland",
    },
    {
      _id: 21,
      experiencia: 10,
      edad: 20,
      puesto: "Sales Associate",
      preparatoria: true,
      nombre: "Morissa Lawty",
    },
    {
      _id: 22,
      experiencia: 11,
      edad: 39,
      puesto: "Speech Pathologist",
      preparatoria: false,
      nombre: "Jacki Scholefield",
    },
    {
      _id: 23,
      experiencia: 34,
      edad: 52,
      puesto: "Media Manager II",
      preparatoria: true,
      nombre: "Eddi Lancetter",
    },
    {
      _id: 24,
      experiencia: 13,
      edad: 28,
      puesto: "Environmental Tech",
      preparatoria: true,
      nombre: "Arie Dosedale",
    },
    {
      _id: 25,
      experiencia: 26,
      edad: 68,
      puesto: "Financial Analyst",
      preparatoria: false,
      nombre: "Micaela Phetteplace",
    },
    {
      _id: 26,
      experiencia: 21,
      edad: 46,
      puesto: "Desktop Support Technician",
      preparatoria: false,
      nombre: "Belicia Reeken",
    },
    {
      _id: 27,
      experiencia: 39,
      edad: 63,
      puesto: "Marketing Assistant",
      preparatoria: false,
      nombre: "Ellis Fagence",
    },
    {
      _id: 28,
      experiencia: 35,
      edad: 49,
      puesto: "Director of Sales",
      preparatoria: true,
      nombre: "Charmian Gorvin",
    },
    {
      _id: 29,
      experiencia: 10,
      edad: 22,
      puesto: "Paralegal",
      preparatoria: true,
      nombre: "Archaimbaud Nias",
    },
    {
      _id: 30,
      experiencia: 28,
      edad: 25,
      puesto: "Professor",
      preparatoria: true,
      nombre: "Roseline Mallender",
    },
    {
      _id: 31,
      experiencia: 36,
      edad: 63,
      puesto: "Quality Engineer",
      preparatoria: true,
      nombre: "Emma Yakob",
    },
    {
      _id: 32,
      experiencia: 38,
      edad: 60,
      puesto: "Pharmacist",
      preparatoria: true,
      nombre: "Alma Kerridge",
    },
    {
      _id: 33,
      experiencia: 34,
      edad: 26,
      puesto: "Teacher",
      preparatoria: false,
      nombre: "Ryun Knifton",
    },
    {
      _id: 34,
      experiencia: 38,
      edad: 24,
      puesto: "Human Resources Assistant II",
      preparatoria: false,
      nombre: "Ewen Thompsett",
    },
    {
      _id: 35,
      experiencia: 5,
      edad: 41,
      puesto: "Senior Cost Accountant",
      preparatoria: true,
      nombre: "Nancy Roome",
    },
    {
      _id: 36,
      experiencia: 28,
      edad: 26,
      puesto: "Editor",
      preparatoria: false,
      nombre: "Page Whawell",
    },
    {
      _id: 37,
      experiencia: 27,
      edad: 30,
      puesto: "Senior Quality Engineer",
      preparatoria: false,
      nombre: "Erin Skeech",
    },
    {
      _id: 38,
      experiencia: 35,
      edad: 43,
      puesto: "Graphic Designer",
      preparatoria: true,
      nombre: "Si Theriot",
    },
    {
      _id: 39,
      experiencia: 28,
      edad: 63,
      puesto: "Computer Systems Analyst III",
      preparatoria: true,
      nombre: "Jamaal Capon",
    },
    {
      _id: 40,
      experiencia: 6,
      edad: 21,
      puesto: "Quality Control Specialist",
      preparatoria: true,
      nombre: "Coletta Seeler",
    },
    {
      _id: 41,
      experiencia: 22,
      edad: 20,
      puesto: "Internal Auditor",
      preparatoria: false,
      nombre: "Odell O'Siaghail",
    },
    {
      _id: 42,
      experiencia: 23,
      edad: 18,
      puesto: "Data Coordiator",
      preparatoria: false,
      nombre: "Emmy Bouller",
    },
    {
      _id: 43,
      experiencia: 5,
      edad: 23,
      puesto: "Professor",
      preparatoria: true,
      nombre: "Curr Ovenden",
    },
    {
      _id: 44,
      experiencia: 9,
      edad: 31,
      puesto: "Computer Systems Analyst II",
      preparatoria: false,
      nombre: "Ag Jekyll",
    },
    {
      _id: 45,
      experiencia: 40,
      edad: 47,
      puesto: "Environmental Tech",
      preparatoria: false,
      nombre: "Leland Shitliffe",
    },
    {
      _id: 46,
      experiencia: 10,
      edad: 58,
      puesto: "Developer I",
      preparatoria: true,
      nombre: "Kaye Primrose",
    },
    {
      _id: 47,
      experiencia: 11,
      edad: 42,
      puesto: "Software Test Engineer III",
      preparatoria: false,
      nombre: "Ashley Lineen",
    },
    {
      _id: 48,
      experiencia: 6,
      edad: 44,
      puesto: "Quality Control Specialist",
      preparatoria: false,
      nombre: "Petronille Ivanonko",
    },
    {
      _id: 49,
      experiencia: 17,
      edad: 69,
      puesto: "Financial Advisor",
      preparatoria: false,
      nombre: "Emerson Scrange",
    },
    {
      _id: 50,
      experiencia: 32,
      edad: 27,
      puesto: "Nurse",
      preparatoria: false,
      nombre: "Merrilee Saladine",
    },
  ];

  const [state, setState] = useState({ item: null, data: [], store: [] });

  useEffect(() => {
    Api.request().then(({ data: response }) => {
      setState((state) => {
        return {
          ...state,
          data: response.concat(data),
          store: response.concat(data),
        };
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInformation = (item) => {
    setState((state) => {
      return {
        ...state,
        item,
      };
    });
  };

  const filterData = (query) => {
    return state.store.filter(
      (el) =>
        el.nombre.toLowerCase().includes(query.toLowerCase()) ||
        el.puesto.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearch = (query) => {
    if (query === "") {
      setState((state) => {
        return {
          ...state,
          data: state.store,
        };
      });
    }
    const results = filterData(query);
    setState((state) => {
      return {
        ...state,
        item: null,
        data: results,
      };
    });
  };

  return (
    <div className="Home">
      <div className="Home__hero">
        <Hero />
      </div>
      <div className="Home__search">
        <Search onSearch={handleSearch} />
      </div>
      <div className="Home__content">
        <div className="Home__content-items">
          <Table items={state.data} handleSelected={handleInformation} />
        </div>
        <div
          className={`Home__content-details ${
            state.item == null && "inactive"
          }`}
        >
          {state.item && (
            <HiringDetails
              employee={state.item}
              handleClick={() =>
                setState((state) => {
                  return { ...state, item: null };
                })
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

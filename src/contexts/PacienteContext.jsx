import React, { createContext, useState, useEffect } from "react";
import {PacienteService}  from "../services/PacienteService";

export const PacienteContext = createContext();

const PacienteContextProvider = (props) => {
  const pacienteService = new PacienteService();

  const [Pacientes, setPacientes] = useState([]);

  const [editPaciente, setEditPaciente] = useState(null);

  useEffect(() => {
    pacienteService.readAll().then((data) => setPacientes(data));
  }, []);

  const createPaciente = (Paciente) => {
    pacienteService
      .create(Paciente)
      .then((data) => setPacientes([...Pacientes, data]));
  };

  const deletePaciente = (id) => {
    pacienteService
      .delete(id)
      .then(() => setPacientes(Pacientes.filter((p) => p._id !== id)));
  };

  const findPaciente = (id) => {
    const Paciente = Pacientes.find((p) => p._id === id);

    setEditPaciente(Paciente);
  };

  const updatePaciente = (Paciente) => {
    pacienteService
      .update(Paciente)
      .then((data) =>
        setPacientes(
          Pacientes.map((p) => (p._id === Paciente._id ? data : Paciente))
        )
      );

    setEditPaciente(null);
  };

  return (
    <PacienteContext.Provider
      value={{
        createPaciente,
        deletePaciente,
        findPaciente,
        updatePaciente,
        editPaciente,
        Pacientes,
      }}
    >
      {props.children}
    </PacienteContext.Provider>
  );
};

export default PacienteContextProvider;

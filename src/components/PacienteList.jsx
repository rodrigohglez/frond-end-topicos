import React, { useContext, useState } from "react";
import { Panel } from "primereact/panel";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { PacienteContext } from "../contexts/PacienteContext";
import PacienteForm from "./PacienteForm";

const PacienteList = () => {
  const { Pacientes, findPaciente } = useContext(PacienteContext);

  const [isVisible, setIsVisible] = useState(false);

  const savePaciente = (id) => {
    findPaciente(id);
    setIsVisible(true);
  };

  const footer = (
    <div className="p-clearfix" style={{ width: "100%" }}>
      <Button
        style={{ float: "left" }}
        icon="pi pi-plus"
        label="Add"
        onClick={() => setIsVisible(true)}
      />
    </div>
  );

  return (
    <div>
      <Panel header="LISTA DE PACIENTES" style={{ textAlign: "center" }}>
        <DataTable
          value={Pacientes}
          selectionMode="single"
          onSelectionChange={(e) => savePaciente(e.value._id)}
          footer={footer}
        >
          <Column field="genero" header="Genero" />
          <Column field="nombre" header="Nombre" />
          <Column field="edad" header="Edad" />
          <Column field="especialidad" header="Especialidad" />
          <Column field="domicilio" header="Domicilio" />
          <Column field="telefono" header="Telefono" />
          <Column field="email" header="Correo Electronico" />
          <Column field="fecha_alta" header="Fecha de Alta" />
          <Column field="fecha_prox" header="Proxima Cita" />
          <Column field="confirmacion" header="Confirmacion" />
          <Column field="estatus" header="Estatus" />
        </DataTable>
      </Panel>
      <PacienteForm isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};

export default PacienteList;

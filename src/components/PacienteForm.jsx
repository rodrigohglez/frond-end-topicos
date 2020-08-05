import React, { useContext, useState, useEffect } from "react";
import { PacienteContext } from "../contexts/PacienteContext";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import {Dropdown} from 'primereact/dropdown';


const PacienteForm = (props) => {
  const { isVisible, setIsVisible } = props;

  const {
    createPaciente,
    deletePaciente,
    editPaciente,
    updatePaciente,
  } = useContext(PacienteContext);

  const initialPacientetate = {
    _id: null,
    genero: "",
    nombre_tutor: "",
    nombre:"",
    fecha_nacimiento: null,
    edad : null,
    especialidad: "",
    tipo_sangre: "",
    domicilio: "",
    telefono: "",
    email: "",
    alergia: "",
    enfermedad: "",
    discapacidad: "",
    fecha_alta:null,
    descripcion: "",
    fecha_prox:null,
    confirmacion: "",
    estatus: "",
  };

  const [pacienteData, setPacienteData] = useState(initialPacientetate);

  useEffect(() => {
    if (editPaciente) setPacienteData(editPaciente);
  }, [editPaciente]);

  const updateField = (data, field) => {
    setPacienteData({
      ...pacienteData,
      [field]: data,
    });

    console.log(pacienteData);
  };

  const _deletePaciente = () => {
    if (editPaciente) {
      deletePaciente(pacienteData._id);
      setPacienteData(initialPacientetate);
    }
    setIsVisible(false);
  };

  const savePaciente = () => {
    if (!editPaciente) {
      createPaciente(pacienteData);
    } else {
      updatePaciente(pacienteData);
    }
    setPacienteData(initialPacientetate);
    setIsVisible(false);
  };

  const dialogFooter = (
    <div className="ui-dialog-buttonpane p-clearfix">
      <Button label="Delete" icon="pi pi-times" onClick={_deletePaciente} />
      <Button label="Save" icon="pi pi-check" onClick={savePaciente} />
    </div>
  );

  const clearSelected = () => {
    setIsVisible(false);
    setPacienteData(initialPacientetate);
  };

  return (
    <div>
      <Dialog
        visible={isVisible}
        modal={true}
        style={{ width: "420px" }}
        contentStyle={{ maxHeight: "500px" }}
        header="Detalles del Paciente"
        onHide={() => clearSelected()}
        footer={dialogFooter}
      >
        <div className="p-grid p-fluid">
          <br />
          <div className="p-float-label">
            <InputText
              value={pacienteData.nombre_tutor}
              onChange={(e) => updateField(e.target.value, "nombre_tutor")}
            />
            <label>Nombre Tutor:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={pacienteData.nombre}
              onChange={(e) => updateField(e.target.value, "nombre")}
            />
            <label>Nombre:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={pacienteData.genero}
              onChange={(e) => updateField(e.target.value, "genero")}
            />
            <label>Genero:</label>
          </div>
          <br />
          <div className="p-float-label">
          <Calendar
              value={
                pacienteData.fecha_nacimiento &&
                new Date(pacienteData.fecha_nacimiento + " ")
              }
              onChange={(e) =>
                updateField(
                  e.target.value.toISOString().substring(0, 10),
                  "fecha_nacimiento"
                )
              }
              dateFormat="yy-mm-dd"
            />
            <label>Fecha de Nacimiento:</label>
          </div>
          <br />
          <div className="p-float-label">
          <InputNumber
              value={pacienteData.edad}
              onChange={(e) => updateField(e.target.value, "edad")}
            />
            <label>Edad:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={pacienteData.especialidad}
              onChange={(e) => updateField(e.target.value, "especialidad")}
            />
            <label>Especialidad:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={pacienteData.tipo_sangre}
              onChange={(e) => updateField(e.target.value, "tipo_sangre")}
            />
            <label>Tipo de Sangre:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={pacienteData.domicilio}
              onChange={(e) => updateField(e.target.value, "domicilio")}
            />
            <label>Domicilio:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={pacienteData.telefono}
              onChange={(e) => updateField(e.target.value, "telefono")}
            />
            <label>Telefono:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={pacienteData.email}
              onChange={(e) => updateField(e.target.value, "email")}
            />
            <label>Correo Electronico:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={pacienteData.alergia}
              onChange={(e) => updateField(e.target.value, "alergia")}
            />
            <label>Alergia:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={pacienteData.enfermedad}
              onChange={(e) => updateField(e.target.value, "enfermedad")}
            />
            <label>Enfermedad:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={pacienteData.discapacidad}
              onChange={(e) => updateField(e.target.value, "discapacidad")}
            />
            <label>Discapacidad:</label>
          </div>
          <br />
          <div className="p-float-label">
            <Calendar
              value={
                pacienteData.fecha_alta &&
                new Date(pacienteData.fecha_alta + " ")
              }
              onChange={(e) =>
                updateField(
                  e.target.value.toISOString().substring(0, 10),
                  "fecha_alta"
                )
              }
              dateFormat="yy-mm-dd"
            />
            <label>Fecha de Alta:</label>
          </div>
          <br />
          <div className="p-float-label">
          <InputText
              value={pacienteData.descripcion}
              onChange={(e) => updateField(e.target.value, "descripcion")}
            />
            <label>Descripcion:</label>
          </div>
          <br />
          <div className="p-float-label">
            <Calendar
              value={
                pacienteData.fecha_prox &&
                new Date(pacienteData.fecha_prox + " ")
              }
              onChange={(e) =>
                updateField(
                  e.target.value.toISOString().substring(0, 10),
                  "fecha_prox"
                )
              }
              dateFormat="yy-mm-dd"
            />
            <label>Proxima Cita:</label>
          </div>
          <br />
          <div className="p-float-label">
          <InputText
              value={pacienteData.confirmacion}
              onChange={(e) => updateField(e.target.value, "confirmacion")}
            />
            <label>Confirmacion:</label>
          </div>
          <br />
          <div className="p-float-label">
          <InputText
              value={pacienteData.estatus}
              onChange={(e) => updateField(e.target.value, "estatus")}
            />
            <label>Estatus:</label>
          </div>
          <br />
        </div>
      </Dialog>
    </div>
  );
};

export default PacienteForm;

import axios from "axios";

export class PacienteService {

    // baseUrl = "http://localhost:8080/api/Pacientes/";
    baseUrl = "https://back-end-topicos.herokuapp.com/api/pacientes/";

    create(Paciente){
        return axios.post(this.baseUrl+"paciente/", Paciente).then(res => res.data);
    }

    readAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }

    update(Paciente){
        return axios.put(this.baseUrl+"paciente/"+Paciente._id, Paciente).then(res => res.data);
    }

    delete(id){
        return axios.delete(this.baseUrl+"paciente/"+id).then(res => res.data);
    }
}
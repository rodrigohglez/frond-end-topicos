(this["webpackJsonpui-pacientes"]=this["webpackJsonpui-pacientes"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),c=t.n(r),i=(t(47),t(48),t(49),t(50),t(40)),o=t(9),u=t(34),m=t(35),d=t(13),s=t.n(d),f=function(){function e(){Object(u.a)(this,e),this.baseUrl="https://back-end-topicos.herokuapp.com/api/pacientes/"}return Object(m.a)(e,[{key:"create",value:function(e){return s.a.post(this.baseUrl+"paciente/",e).then((function(e){return e.data}))}},{key:"readAll",value:function(){return s.a.get(this.baseUrl).then((function(e){return e.data}))}},{key:"update",value:function(e){return s.a.put(this.baseUrl+"paciente/"+e._id,e).then((function(e){return e.data}))}},{key:"delete",value:function(e){return s.a.delete(this.baseUrl+"paciente/"+e).then((function(e){return e.data}))}}]),e}(),E=Object(n.createContext)(),b=function(e){var a=new f,t=Object(n.useState)([]),r=Object(o.a)(t,2),c=r[0],u=r[1],m=Object(n.useState)(null),d=Object(o.a)(m,2),s=d[0],b=d[1];Object(n.useEffect)((function(){a.readAll().then((function(e){return u(e)}))}),[]);return l.a.createElement(E.Provider,{value:{createPaciente:function(e){a.create(e).then((function(e){return u([].concat(Object(i.a)(c),[e]))}))},deletePaciente:function(e){a.delete(e).then((function(){return u(c.filter((function(a){return a._id!==e})))}))},findPaciente:function(e){var a=c.find((function(a){return a._id===e}));b(a)},updatePaciente:function(e){a.update(e).then((function(a){return u(c.map((function(t){return t._id===e._id?a:e})))})),b(null)},editPaciente:s,Pacientes:c}},e.children)},p=t(36),v=t(37),h=t(7),g=t(12),C=t(16),x=t(18),N=t(38),_=t(3),I=t(39),O=t(17),T=(t(99),function(e){var a=e.isVisible,t=e.setIsVisible,r=Object(n.useContext)(E),c=r.createPaciente,i=r.deletePaciente,u=r.editPaciente,m=r.updatePaciente,d={_id:null,genero:"",nombre_tutor:"",nombre:"",fecha_nacimiento:null,edad:null,especialidad:"",tipo_sangre:"",domicilio:"",telefono:"",email:"",alergia:"",enfermedad:"",discapacidad:"",fecha_alta:null,descripcion:"",fecha_prox:null,confirmacion:"",estatus:""},s=Object(n.useState)(d),f=Object(o.a)(s,2),b=f[0],p=f[1];Object(n.useEffect)((function(){u&&p(u)}),[u]);var v=function(e,a){p(Object(x.a)(Object(x.a)({},b),{},Object(C.a)({},a,e))),console.log(b)},h=l.a.createElement("div",{className:"ui-dialog-buttonpane p-clearfix"},l.a.createElement(g.Button,{label:"Delete",icon:"pi pi-times",onClick:function(){u&&(i(b._id),p(d)),t(!1)}}),l.a.createElement(g.Button,{label:"Save",icon:"pi pi-check",onClick:function(){u?m(b):c(b),p(d),t(!1)}}));return l.a.createElement("div",null,l.a.createElement(N.Dialog,{visible:a,modal:!0,style:{width:"420px"},contentStyle:{maxHeight:"500px"},header:"Detalles del Paciente",onHide:function(){return t(!1),void p(d)},footer:h},l.a.createElement("div",{className:"p-grid p-fluid"},l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.nombre_tutor,onChange:function(e){return v(e.target.value,"nombre_tutor")}}),l.a.createElement("label",null,"Nombre Tutor:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.nombre,onChange:function(e){return v(e.target.value,"nombre")}}),l.a.createElement("label",null,"Nombre:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.genero,onChange:function(e){return v(e.target.value,"genero")}}),l.a.createElement("label",null,"Genero:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(O.Calendar,{value:b.fecha_nacimiento&&new Date(b.fecha_nacimiento+" "),onChange:function(e){return v(e.target.value.toISOString().substring(0,10),"fecha_nacimiento")},dateFormat:"yy-mm-dd"}),l.a.createElement("label",null,"Fecha de Nacimiento:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(I.InputNumber,{value:b.edad,onChange:function(e){return v(e.target.value,"edad")}}),l.a.createElement("label",null,"Edad:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.especialidad,onChange:function(e){return v(e.target.value,"especialidad")}}),l.a.createElement("label",null,"Especialidad:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.tipo_sangre,onChange:function(e){return v(e.target.value,"tipo_sangre")}}),l.a.createElement("label",null,"Tipo de Sangre:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.domicilio,onChange:function(e){return v(e.target.value,"domicilio")}}),l.a.createElement("label",null,"Domicilio:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.telefono,onChange:function(e){return v(e.target.value,"telefono")}}),l.a.createElement("label",null,"Telefono:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.email,onChange:function(e){return v(e.target.value,"email")}}),l.a.createElement("label",null,"Correo Electronico:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.alergia,onChange:function(e){return v(e.target.value,"alergia")}}),l.a.createElement("label",null,"Alergia:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.enfermedad,onChange:function(e){return v(e.target.value,"enfermedad")}}),l.a.createElement("label",null,"Enfermedad:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.discapacidad,onChange:function(e){return v(e.target.value,"discapacidad")}}),l.a.createElement("label",null,"Discapacidad:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(O.Calendar,{value:b.fecha_alta&&new Date(b.fecha_alta+" "),onChange:function(e){return v(e.target.value.toISOString().substring(0,10),"fecha_alta")},dateFormat:"yy-mm-dd"}),l.a.createElement("label",null,"Fecha de Alta:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.descripcion,onChange:function(e){return v(e.target.value,"descripcion")}}),l.a.createElement("label",null,"Descripcion:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(O.Calendar,{value:b.fecha_prox&&new Date(b.fecha_prox+" "),onChange:function(e){return v(e.target.value.toISOString().substring(0,10),"fecha_prox")},dateFormat:"yy-mm-dd"}),l.a.createElement("label",null,"Proxima Cita:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.confirmacion,onChange:function(e){return v(e.target.value,"confirmacion")}}),l.a.createElement("label",null,"Confirmacion:")),l.a.createElement("br",null),l.a.createElement("div",{className:"p-float-label"},l.a.createElement(_.InputText,{value:b.estatus,onChange:function(e){return v(e.target.value,"estatus")}}),l.a.createElement("label",null,"Estatus:")),l.a.createElement("br",null))))}),j=function(){var e=Object(n.useContext)(E),a=e.Pacientes,t=e.findPaciente,r=Object(n.useState)(!1),c=Object(o.a)(r,2),i=c[0],u=c[1],m=l.a.createElement("div",{className:"p-clearfix",style:{width:"100%"}},l.a.createElement(g.Button,{style:{float:"left"},icon:"pi pi-plus",label:"Add",onClick:function(){return u(!0)}}));return l.a.createElement("div",null,l.a.createElement(p.Panel,{header:"LISTA DE PACIENTES",style:{textAlign:"center"}},l.a.createElement(v.DataTable,{value:a,selectionMode:"single",onSelectionChange:function(e){return a=e.value._id,t(a),void u(!0);var a},footer:m},l.a.createElement(h.Column,{field:"genero",header:"Genero"}),l.a.createElement(h.Column,{field:"nombre",header:"Nombre"}),l.a.createElement(h.Column,{field:"edad",header:"Edad"}),l.a.createElement(h.Column,{field:"especialidad",header:"Especialidad"}),l.a.createElement(h.Column,{field:"domicilio",header:"Domicilio"}),l.a.createElement(h.Column,{field:"telefono",header:"Telefono"}),l.a.createElement(h.Column,{field:"email",header:"Correo Electronico"}),l.a.createElement(h.Column,{field:"fecha_alta",header:"Fecha de Alta"}),l.a.createElement(h.Column,{field:"fecha_prox",header:"Proxima Cita"}),l.a.createElement(h.Column,{field:"confirmacion",header:"Confirmacion"}),l.a.createElement(h.Column,{field:"estatus",header:"Estatus"}))),l.a.createElement(T,{isVisible:i,setIsVisible:u}))};var P=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null,l.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,a,t){e.exports=t(100)},47:function(e,a,t){}},[[42,1,2]]]);
//# sourceMappingURL=main.4b565b23.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,n){},107:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(20),i=n.n(r),o=n(13),s=n(15),l=n(93),d=n(26),j=[{id:"1",name:"Unidad de Finanzas",parentId:null,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:"2",name:"Unidad de Mercadeo",parentId:null,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:"3",name:"Unidad de RRHH",parentId:null,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:"4",name:"Unidad de Contabilidad",parentId:"1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}],b=[{id:"1",name:"Gerente Financiero",unitId:"1",isManager:!0},{id:"2",name:"Secretearia I",unitId:"1",isManager:!1},{id:"3",name:"Contador",unitId:"4",isManager:!1},{id:"4",name:"Gerente de marketing",unitId:"2",isManager:!0},{id:"4",name:"Gerente de rrhh",unitId:"3",isManager:!0}],u=Object(s.c)({units:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return"ADD_UNIT"==t.type?[].concat(Object(d.a)(e),[t.payload]):"EDIT_UNIT"==t.type?[].concat(Object(d.a)(e.filter((function(e){return e.id!=t.payload.id}))),[t.payload]).sort((function(e,t){return e.id>t.id?1:e.id<t.id?-1:0})):"DELETE_UNIT"==t.type?e.filter((function(e){return e.id!=t.payload.id})):e},jobs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return"ADD_JOB"==t.type?[].concat(Object(d.a)(e),[t.payload]):"EDIT_JOB"==t.type?[].concat(Object(d.a)(e.filter((function(e){return e.id!=t.payload.id}))),[t.payload]).sort((function(e,t){return e.id>t.id?1:e.id<t.id?-1:0})):"DELETE_JOB"==t.type?e.filter((function(e){return e.id!=t.payload.id})):e}}),O=n(11),p={fields:{id:null,name:"",description:"",parentId:null}};var h={fields:{id:null,name:"",description:"",isManager:!1,parentId:null}};var m=Object(s.c)({selectedNode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_SELECTED_NODE"==t.type?(console.log(t.payload),t.payload):e},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{show:!1},t=arguments.length>1?arguments[1]:void 0;return"SHOW_MODAL"==t.type?t.payload:e},unitForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_UNIT_FORM"==t.type?Object(O.a)(Object(O.a)({},e),t.payload):e},jobForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_JOB_FORM"==t.type?Object(O.a)(Object(O.a)({},e),t.payload):e}}),x=Object(s.c)({entities:u,ui:m}),f=[{id:"1",dni:"12345678",name:"Joaquin",middlename:"Chumacero",lastname:"Yupanqui",dateOfBirth:"03/09/77",gender:"Masculino",nationality:"Boliviana",afp:"AFP Futuro",contract:{type:"contrato laboral",startDate:"04/09/19",jobId:"1",salary:5e5}}];var v=Object(s.c)({employees:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;return console.log(t),"ADD_EMPLOYEE"==t.type?[].concat(Object(d.a)(e),[t.payload]):e}}),g={fields:{dni:"",dniComplement:"",name:"",middlename:"",lastname:"",gender:"Masculino",dateOfBirth:"",nacionality:"Boliviana",contractType:"contrato laboral",startDate:"",salary:"",unitId:"",jobId:"",afp:""}};var y=Object(s.c)({employeeForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_EMPLOYEE_FORM"==t.type?Object(O.a)(Object(O.a)({},e),t.payload):"RESET_EMPLOYE_FORM"==t.type?g:e}}),I=Object(s.c)({entities:v,ui:y});var C=Object(s.c)({showSidebar:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"TOGGLE_SIDEBAR"==t.type?!e:e}}),E=n(34),w=n.n(E),N=n(38),_=w.a.mark(T),D=w.a.mark(L),S=w.a.mark(R);function T(e){var t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(N.c)((function(t){return t.organization.entities.units.find((function(t){return t.id==e.payload.id}))}));case 2:return t=n.sent,n.next=5,Object(N.b)({type:"UPDATE_UNIT_FORM",payload:{fields:{id:t.id,name:t.name,description:t.description,parentId:t.parentId}}});case 5:return n.next=7,Object(N.b)({type:"SHOW_MODAL",payload:{show:!0,target:"unit",id:null}});case 7:case"end":return n.stop()}}),_)}function L(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.b)({type:"UPDATE_UNIT_FORM",payload:{fields:{id:null,name:"",description:"",parentId:e.payload.parentId}}});case 2:return t.next=4,Object(N.b)({type:"SHOW_MODAL",payload:{show:!0,target:"unit",id:null}});case 4:case"end":return t.stop()}}),D)}function R(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)([Object(N.d)("PREPARE_UNIT_FORM",T),Object(N.d)("PREPARE_NEW_UNIT_FORM",L)]);case 2:case"end":return e.stop()}}),S)}var A=Object(s.c)({organization:x,employee:I,main:C}),F=Object(l.a)(),M=Object(s.e)(A,Object(s.a)(F));F.run(R);var U=M,P=(n(104),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))}),k=n(125),z=n(127),B=n(128),G=n(129),q=n(121),H=n(87),J=n(124),W=n(31),Y=n(17),K=n(119),Q=n(94),V=n(2),X=function(e){var t=e.className,n=void 0===t?"":t,a=e.side,c=void 0===a?"right":a,r=e.title,i=void 0===r?"":r,o=e.items,s=void 0===o?[]:o,l=e.renderItem;Object(Q.a)(e,["className","side","title","items","renderItem"]);return Object(V.jsxs)("div",{className:"".concat(n,"  ").concat({left:"border-left",right:"border-right"}[c]),id:"sidebar-wrapper",children:[Object(V.jsx)("div",{className:"sidebar-heading",children:i}),Object(V.jsx)("div",{className:"list-group",children:s.map((function(e){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(W.b,{to:e.path,className:"list-group-item list-group-item-action border-0 text-nowrap",style:{padding:".5rem 1rem"},children:[e.icon,l?l(e):Object(V.jsx)("span",{style:{verticalAlign:"middle",marginLeft:"0.5rem"},children:e.title})]},e.id),e.items&&e.items.map((function(t){return Object(V.jsxs)(W.b,{to:t.path,style:{padding:".5rem 1rem",paddingLeft:"2rem"},className:"list-group-item list-group-item-action border-0 text-nowrap",children:[t.icon,l?l(e):Object(V.jsx)("span",{style:{verticalAlign:"middle",marginLeft:"0.5rem"},children:t.title})]},t.id)}))]})}))})]})},Z=(n(83),n(118)),$=n(44),ee=function(e){return e.organization.entities.units},te=function(e){return e.organization.entities.jobs},ne=function(e){return e.organization.ui.modal},ae=Object($.a)(ee,te,(function(e){return e.organization.ui.selectedNode}),(function(e,t,n){if(n&&"unit"==n.type){var a=e.find((function(e){return e.id==n.id}));return{id:null===a||void 0===a?void 0:a.id,name:null===a||void 0===a?void 0:a.name,description:null===a||void 0===a?void 0:a.description,subunits:e.filter((function(e){return e.parentId==(null===a||void 0===a?void 0:a.id)})),jobs:t.filter((function(e){return e.unitId==(null===a||void 0===a?void 0:a.id)}))}}return null})),ce=function(){var e=Object(o.c)(ae);return console.log(e),e?Object(V.jsxs)("div",{children:[Object(V.jsx)("h2",{style:{fontSize:"1.75rem"},children:e.name}),Object(V.jsx)("p",{children:e.description}),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("h3",{style:{fontSize:"1.5rem"},children:"Sub unidades"}),Object(V.jsxs)(Z.a,{responsive:!0,children:[Object(V.jsx)("thead",{children:Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{style:{width:0},children:"#"}),Object(V.jsx)("th",{children:"Nombre"})]})}),Object(V.jsx)("tbody",{children:e.subunits.length?e.subunits.map((function(e,t){return Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{scope:"row",children:t+1}),Object(V.jsx)("td",{children:e.name})]})})):Object(V.jsx)("tr",{children:Object(V.jsx)("td",{className:"bg-light text-center",colSpan:3,children:"Aun no se agregaron sub unidades"})})})]})]}),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("h3",{style:{fontSize:"1.5rem"},children:"Cargos"}),Object(V.jsxs)(Z.a,{responsive:!0,children:[Object(V.jsx)("thead",{children:Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{style:{width:0},children:"#"}),Object(V.jsx)("th",{children:"Nombre"})]})}),Object(V.jsx)("tbody",{children:e.jobs.length?e.jobs.map((function(e,t){return Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{scope:"row",children:t+1}),Object(V.jsx)("td",{children:"".concat(e.name," ").concat(e.isManager?"(Administrador)":"")})]})})):Object(V.jsx)("tr",{children:Object(V.jsx)("td",{className:"bg-light text-center",colSpan:3,children:"Aun no se agregaron puestos de trabajo"})})})]})]})]}):null},re=n(19),ie=n(92),oe=n(16),se=function(e){return e.organization.entities.units},le=(Object($.a)(se,(function(e,t){return t}),(function(e,t){return e.filter((function(e){return e.parentId==t}))})),Object($.a)(se,(function(e){return e.organization.entities.jobs}),(function(e,t){var n=function n(a){return e.filter((function(e){return e.parentId==a})).map((function(e){return{key:"unit-".concat(e.id),title:e.name,icon:oe.h,children:[].concat(Object(d.a)(n(e.id)),Object(d.a)(t.filter((function(t){return t.unitId==e.id})).map((function(e){return{key:"job-".concat(e.id),title:e.name,icon:oe.c}}))))}}))}(null);return[{key:"root",title:"Caja de Salud de Caminos y R.A.",icon:oe.d,children:n}]}))),de=(n(107),n(43)),je=n(47),be=(n(108),"ORG_STR_MENU"),ue=function(){var e=Object(o.b)(),t=Object(de.d)({id:be}).show,n=Object(o.c)(le),c=Object(a.useCallback)((function(e){return"root"==e.props.nodeId}),[]);return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(ie.a,{className:"os-tree position-absolute border",switcherIcon:function(e){var t;return(null===(t=e.data)||void 0===t?void 0:t.children)?e.expanded?Object(V.jsx)(je.a,{}):Object(V.jsx)(je.b,{}):null},draggable:!0,treeData:n,defaultExpandedKeys:["root"],multiple:!1,onSelect:function(t){if(t.length){var n=t[0].split("-"),a=Object(re.a)(n,2),c=a[0],r=a[1];e({type:"UPDATE_SELECTED_NODE",payload:{id:r,type:c}})}else e({type:"UPDATE_SELECTED_NODE",payload:null})},onRightClick:function(e){t(e.event,{props:{nodeId:e.node.key}})}}),Object(V.jsxs)(de.b,{id:be,children:[Object(V.jsxs)(de.c,{label:"Crear",arrow:Object(V.jsx)(je.b,{}),children:[Object(V.jsx)(de.a,{onClick:function(t){var n=t.props,a="root"==n.nodeId?[null,null]:n.nodeId.split("-"),c=Object(re.a)(a,2),r=(c[0],c[1]);e({type:"PREPARE_NEW_UNIT_FORM",payload:{parentId:r}})},children:"Unidad"}),Object(V.jsx)(de.a,{onClick:function(t){var n=t.props,a="root"==n.nodeId?[null,null]:n.nodeId.split("-"),c=Object(re.a)(a,2),r=(c[0],c[1]);e({type:"PREPARE_NEW_JOB_FORM",payload:{parentId:r}})},children:"Cargo"})]}),Object(V.jsx)(de.a,{hidden:c,onClick:function(t){var n=t.props.nodeId.split("-"),a=Object(re.a)(n,2),c=a[0],r=a[1];e({type:"unit"==c?"PREPARE_UNIT_FORM":"PREPARE_JOB_FORM",payload:{id:r}})},children:"Editar"}),Object(V.jsx)(de.a,{hidden:c,onClick:function(t){var n=t.props.nodeId.split("-"),a=Object(re.a)(n,2),c=a[0],r=a[1];e({type:"unit"==c?"DELETE_UNIT":"DELETE_JOB",payload:r})},children:"Eliminar"})]})]})},Oe=n(122),pe=n(88),he=n(123),me=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.organization.ui.unitForm})).fields;return console.log("Fields",t),Object(V.jsxs)(he.a,{id:"unit-form",onSubmit:function(n){n.preventDefault(),t.id?e({type:"EDIT_UNIT",payload:{id:t.id,name:t.name,description:t.description,parentId:t.parentId}}):e({type:"ADD_UNIT",payload:{id:Math.round(99999999*Math.random())+"",name:t.name,description:t.description,parentId:t.parentId}}),e({type:"SHOW_MODAL",payload:{show:!1}})},children:[Object(V.jsxs)(he.a.Group,{controlId:"doctor",children:[Object(V.jsx)(he.a.Label,{children:"Nombre"}),Object(V.jsx)(he.a.Control,{type:"text",value:t.name,onChange:function(n){var a=n.target.value;e({type:"UPDATE_UNIT_FORM",payload:{fields:Object(O.a)(Object(O.a)({},t),{},{name:a})}})}})]}),Object(V.jsxs)(he.a.Group,{controlId:"doctor",children:[Object(V.jsx)(he.a.Label,{children:"Descripci\xf3n"}),Object(V.jsx)(he.a.Control,{as:"textarea",value:t.description,onChange:function(n){var a=n.target.value;e({type:"UPDATE_UNIT_FORM",payload:{fields:Object(O.a)(Object(O.a)({},t),{},{description:a})}})}})]})]})},xe=function(){var e=Object(o.b)(),t=Object(o.c)(ne),n=t.show,a=t.target,c=t.id;return Object(V.jsxs)(Oe.a,{centered:!0,show:n,onHide:function(){e({type:"SHOW_MODAL",payload:{show:!1}})},children:[Object(V.jsx)(Oe.a.Header,{closeButton:!0,children:Object(V.jsxs)(Oe.a.Title,{children:["".concat(null!=c?"Editar":"Crear"),Object(V.jsx)("span",{children:"unit"==a?" Unidad":" Puesto de Trabajo"})]})}),Object(V.jsx)(Oe.a.Body,{children:"unit"==a?Object(V.jsx)(me,{}):null}),Object(V.jsxs)(Oe.a.Footer,{children:[Object(V.jsx)(pe.a,{variant:"secondary",onClick:function(){e({type:"SHOW_MODAL",payload:{show:!1}})},children:"Cancelar"}),Object(V.jsx)(pe.a,{variant:"primary",form:"unit-form",type:"submit",children:"Guardar"})]})]})},fe=function(){return Object(V.jsxs)("div",{style:{minWidth:480},className:"d-flex flex-column bg-white rounded-lg shadow-sm m-2 p-3 flex-grow-1",children:[Object(V.jsx)("h1",{style:{fontSize:"2rem"},children:"Estructura Organizacional"}),Object(V.jsxs)("div",{className:"position-relative d-flex flex-grow-1",children:[Object(V.jsx)(ue,{}),Object(V.jsx)("div",{className:"p-3 border flex-grow-1",style:{marginLeft:"11rem"},children:Object(V.jsx)(ce,{})})]}),Object(V.jsx)(xe,{})]})},ve=function(e){return e.employee.ui.employeeForm},ge=Object($.a)((function(e){return e.employee.entities.employees}),ee,te,(function(e,t,n){return e.map((function(e){var a=t.find((function(t){return t.id==e.contract.jobId}));return{id:e.id,dni:e.dni,fullName:"".concat(e.lastname," ").concat(e.middlename," ").concat(e.name),gender:e.gender,dateOfBirth:e.dateOfBirth,nationality:e.nationality,afp:e.afp,contract:{type:e.contract.type,startDate:e.contract.startDate,job:{name:null===a||void 0===a?void 0:a.name,unit:n.find((function(t){return t.id==e.contract.jobId}))},salary:(e.contract.salary/100).toFixed(2)}}}))})),ye=function(){var e=Object(Y.g)(),t=(e.path,e.url,Object(o.c)(ge));return Object(V.jsxs)("div",{style:{minWidth:480},className:"d-flex flex-column bg-white rounded-lg shadow-sm m-2 p-3 flex-grow-1",children:[Object(V.jsx)("h1",{style:{fontSize:"2rem"},children:"Lista de empleados"}),Object(V.jsxs)(Z.a,{responsive:!0,className:"small text-nowrap",children:[Object(V.jsx)("thead",{children:Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{style:{width:0},children:"#"}),Object(V.jsx)("th",{children:"Carnet de identidad"}),Object(V.jsx)("th",{children:"Nombre completo"}),Object(V.jsx)("th",{children:"Sexo"}),Object(V.jsx)("th",{children:"Fecha de nacimiento"}),Object(V.jsx)("th",{children:"Nacionalidad"}),Object(V.jsx)("th",{children:"Tipo de contrato"}),Object(V.jsx)("th",{children:"Fecha de incorporaci\xf3n"}),Object(V.jsx)("th",{children:"Unidad"}),Object(V.jsx)("th",{children:"Cargo"}),Object(V.jsx)("th",{children:"Salario"}),Object(V.jsx)("th",{children:"Afp"})]})}),Object(V.jsx)("tbody",{children:t.map((function(e,t){var n;return Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{scope:"row",children:t+1}),Object(V.jsx)("td",{children:e.dni}),Object(V.jsx)("td",{className:"text-nowrap",children:e.fullName}),Object(V.jsx)("td",{children:e.gender}),Object(V.jsx)("td",{children:e.dateOfBirth}),Object(V.jsx)("td",{children:e.nationality}),Object(V.jsx)("td",{children:e.contract.type}),Object(V.jsx)("td",{children:e.contract.startDate}),Object(V.jsx)("td",{className:"text-nowrap",children:null===(n=e.contract.job.unit)||void 0===n?void 0:n.name}),Object(V.jsx)("td",{className:"text-nowrap",children:e.contract.job.name}),Object(V.jsx)("td",{children:e.contract.salary}),Object(V.jsx)("td",{children:e.afp})]})}))})]})]})},Ie=n(64),Ce=n(126),Ee=function(){var e=Object(o.b)(),t=Object(o.c)(ve).fields,n=Object(o.c)(ee),a=Object(o.c)((function(e){return n=e,a=t.unitId,n.organization.entities.jobs.filter((function(e){return e.unitId==a}));var n,a})),c=function(n){return function(a){var c=a.target.value;!function(n,a){e({type:"UPDATE_EMPLOYEE_FORM",payload:{fields:Object(O.a)(Object(O.a)({},t),{},Object(Ie.a)({},n,a))}})}(n,c)}};return Object(V.jsx)("div",{style:{minWidth:480},className:"d-flex flex-column bg-white rounded-lg shadow-sm m-2 p-3 flex-grow-1",children:Object(V.jsxs)(he.a,{onSubmit:function(n){n.preventDefault();var a={id:Object(Ce.a)(),dni:t.dni,name:t.name,middlename:t.middlename,lastname:t.lastname,gender:t.gender,dateOfBirth:t.dateOfBirth,nationality:t.nacionality,afp:t.afp,contract:{type:t.contractType,startDate:t.startDate,jobId:t.jobId,salary:t.salary}};e({type:"ADD_EMPLOYEE",payload:a}),e({type:"RESET_EMPLOYE_FORM"})},children:[Object(V.jsxs)("fieldset",{children:[Object(V.jsx)("legend",{children:"Informacion Personal"}),Object(V.jsxs)(he.a.Row,{children:[Object(V.jsxs)(he.a.Group,{as:H.a,xs:8,md:4,controlId:"employee-dni",children:[Object(V.jsx)(he.a.Label,{children:"Carnet de Identidad"}),Object(V.jsx)(he.a.Control,{type:"text",value:t.dni,onChange:c("dni")})]}),Object(V.jsxs)(he.a.Group,{as:H.a,xs:4,md:2,controlId:"employee-dni-complement",children:[Object(V.jsx)(he.a.Label,{children:"Complemento"}),Object(V.jsx)(he.a.Control,{type:"text",value:t.dniComplement,onChange:c("dniComplement")})]})]}),Object(V.jsx)(he.a.Row,{className:"d-none",children:Object(V.jsx)(he.a.Group,{as:H.a,children:Object(V.jsx)(pe.a,{children:"Buscar"})})}),Object(V.jsxs)(he.a.Row,{children:[Object(V.jsxs)(he.a.Group,{as:H.a,md:4,controlId:"employee-name",children:[Object(V.jsx)(he.a.Label,{children:"Nombre"}),Object(V.jsx)(he.a.Control,{type:"text",value:t.name,onChange:c("name")})]}),Object(V.jsxs)(he.a.Group,{as:H.a,md:4,controlId:"employee-middlename",children:[Object(V.jsx)(he.a.Label,{children:"Apellido Paterno"}),Object(V.jsx)(he.a.Control,{type:"text",value:t.middlename,onChange:c("middlename")})]}),Object(V.jsxs)(he.a.Group,{as:H.a,md:4,controlId:"employee-lastname",children:[Object(V.jsx)(he.a.Label,{children:"Apellido Materno"}),Object(V.jsx)(he.a.Control,{type:"text",value:t.lastname,onChange:c("lastname")})]})]}),Object(V.jsxs)(he.a.Row,{children:[Object(V.jsxs)(he.a.Group,{as:H.a,sm:4,controlId:"employee-gender",children:[Object(V.jsx)(he.a.Label,{children:"Sexo"}),Object(V.jsxs)(he.a.Control,{as:"select",value:t.gender,onChange:c("gender"),children:[Object(V.jsx)("option",{id:"1",value:"Masculino",children:"Hombre"}),Object(V.jsx)("option",{id:"2",value:"Femenino",children:"Mujer"})]})]}),Object(V.jsxs)(he.a.Group,{as:H.a,sm:8,md:4,controlId:"employee-dayofbirth",children:[Object(V.jsx)(he.a.Label,{children:"Fecha de nacimiento"}),Object(V.jsx)(he.a.Control,{type:"date",value:t.dateOfBirth,onChange:c("dateOfBirth")})]}),Object(V.jsxs)(he.a.Group,{as:H.a,md:4,controlId:"employee-nationality",children:[Object(V.jsx)(he.a.Label,{children:"Nacionalidad"}),Object(V.jsxs)(he.a.Control,{as:"select",value:t.nacionality,onChange:c("nacionality"),children:[Object(V.jsx)("option",{value:"Boliviana",children:"Boliviana"}),Object(V.jsx)("option",{value:"Extranjera",children:"Extranjera"})]})]})]})]}),Object(V.jsxs)("fieldset",{children:[Object(V.jsx)("legend",{children:"Informacion de Contrato"}),Object(V.jsxs)(he.a.Row,{children:[Object(V.jsxs)(he.a.Group,{as:H.a,md:4,controlId:"employee-contract-type",children:[Object(V.jsx)(he.a.Label,{children:"Tipo de contrato"}),Object(V.jsxs)(he.a.Control,{as:"select",value:t.contractType,onChange:c("contractType"),children:[Object(V.jsx)("option",{id:"1",value:"item",children:"Item"}),Object(V.jsx)("option",{id:"2",value:"contrato laboral",children:"Contrato Laboral"}),Object(V.jsx)("option",{id:"3",value:"consultor\xeda",children:"Consultor\xeda"})]})]}),Object(V.jsxs)(he.a.Group,{as:H.a,sm:8,md:4,controlId:"employee-contract-start-date",children:[Object(V.jsx)(he.a.Label,{children:"Fecha de inicio"}),Object(V.jsx)(he.a.Control,{type:"date",value:t.startDate,onChange:c("startDate")})]}),Object(V.jsxs)(he.a.Group,{as:H.a,sm:4,controlId:"employee-contract-salary",children:[Object(V.jsx)(he.a.Label,{children:"Salario"}),Object(V.jsx)(he.a.Control,{type:"number",value:t.salary,onChange:c("salary")})]})]}),Object(V.jsxs)(he.a.Row,{children:[Object(V.jsxs)(he.a.Group,{as:H.a,controlId:"employee-contract-job-unit",children:[Object(V.jsx)(he.a.Label,{children:"Unidad"}),Object(V.jsx)(he.a.Control,{as:"select",value:t.unitId,onChange:c("unitId"),children:Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("option",{value:""}),n.map((function(e){return Object(V.jsx)("option",{value:e.id,children:e.name},e.id)}))]})})]}),Object(V.jsxs)(he.a.Group,{as:H.a,controlId:"employee-contract-job",children:[Object(V.jsx)(he.a.Label,{children:"Cargo"}),Object(V.jsx)(he.a.Control,{as:"select",value:t.jobId,onChange:c("jobId"),children:Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("option",{value:""}),a.map((function(e){return Object(V.jsx)("option",{value:e.id,children:e.name},e.id)}))]})})]})]})]}),Object(V.jsxs)("fieldset",{children:[Object(V.jsx)("legend",{children:"Informaci\xf3n sobre AFP"}),Object(V.jsx)(he.a.Row,{children:Object(V.jsxs)(he.a.Group,{as:H.a,controlId:"employee-afp",children:[Object(V.jsx)(he.a.Label,{children:"Empresa"}),Object(V.jsx)(he.a.Control,{type:"text",value:t.afp,onChange:c("afp")})]})})]}),Object(V.jsx)(pe.a,{type:"submit",children:"Registrar"})]})})},we=function(){var e=Object(o.c)((function(e){return e.main.showSidebar})),t=Object(Y.g)(),n=t.path,a=t.url;return Object(V.jsxs)("div",{className:"position-relative d-flex flex-grow-1 bg-light"+(e?"":" toggled"),id:"wrapper",children:[Object(V.jsx)(X,{className:"bg-white shadow-sm ",style:{height:"initial"},items:[{id:"organizational-structure",icon:Object(V.jsx)(oe.d,{}),path:"".concat(a,"/organizacion"),title:"Estructura Organizacional"},{id:"employee",icon:Object(V.jsx)(je.c,{}),path:"".concat(a,"/empleados"),title:"Empleados",items:[{id:"registrar-empleado",icon:Object(V.jsx)(je.d,{}),path:"".concat(a,"/empleados/registrar"),title:"Registrar"}]}]}),Object(V.jsx)(K.a,{className:"d-flex flex-column flex-grow-1",style:{overflow:"auto"},children:Object(V.jsxs)(Y.d,{children:[Object(V.jsx)(Y.b,{exact:!0,path:n,children:Object(V.jsx)(Y.a,{to:"".concat(n,"/organizacion")})}),Object(V.jsx)(Y.b,{path:"".concat(n,"/organizacion"),children:Object(V.jsx)(fe,{})}),Object(V.jsx)(Y.b,{path:"".concat(n,"/empleados/registrar"),children:Object(V.jsx)(Ee,{})}),Object(V.jsx)(Y.b,{exact:!0,path:"".concat(n,"/empleados"),children:Object(V.jsx)(ye,{})})]})})]})},Ne=n(120),_e=function(e){var t=Object(a.useState)(0),n=Object(re.a)(t,2),c=n[0],r=n[1],i=e.placeholder,o=e.loading;Object(a.useEffect)((function(){var e=setInterval((function(){r((function(e){return(e+1)%3}))}),1e3);return function(){return clearInterval(e)}}),[]);var s=i+(o?new Array(c+1).join("."):"");return Object(V.jsx)("input",Object(O.a)(Object(O.a)({},e),{},{placeholder:s}))},De=n(89),Se=n.n(De);function Te(e){var t=e.url,n=e.height;return Object(a.useEffect)((function(){Se.a.embed(t,"#pdfcontainer",{fallbackLink:'<p>Este navegador no soporta la visualizacion de archivos PDF en linea, por favor descarga el archivo haciendo clic : <a href="[url]">aqu\xed</a></p>'})}),[t]),Object(V.jsx)("div",{id:"pdfcontainer",style:{height:n}})}var Le=n(90),Re=function(e,t){var n=Object(a.useState)({}),c=Object(re.a)(n,2),r=c[0],i=c[1],o=function(e,t){var n=Object(a.useRef)(e);return Object(a.useEffect)((function(){n.current=e}),[t]),n}(e,t);return[r,Object(a.useCallback)((function(){(function(){var e=Object(Le.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({completed:!1}),e.next=3,o.current();case 3:return t=e.sent,e.next=6,Array.isArray(t)?Promise.all(t.map((function(e){return e.json()}))):t.json();case 6:n=e.sent,Array.isArray(t)?t.every((function(e){return e.ok})):t.ok,i({completed:!0,data:n,error:!1});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){i({completed:!0,error:!0})}))}),[])]},Ae=n(48),Fe={id:0,carnet:"",nombre:"",empresa:{nombre:"",estado:""}},Me=function(e){var t=e.disabled,n=e.paciente,c=e.onChange,r=Object(a.useRef)(n.carnet),i=Re((function(){return fetch(Ae.a+"/pacientes?carnet=".concat(n.carnet))}),[n.carnet]),o=Object(re.a)(i,2),s=o[0],l=o[1],d=Object(a.useCallback)((function(e){var t=e.target.value.toUpperCase();c(Object(O.a)(Object(O.a)({},Fe),{},{carnet:t}))}),[n]),j=Object(a.useCallback)((function(e){r.current!=n.carnet&&(r.current=n.carnet,l())}),[n.carnet]);return Object(a.useEffect)((function(){if(s.completed&&!s.error){var e=s.data;e.length&&c(e[0])}}),[s]),Object(V.jsxs)("fieldset",{disabled:t,children:[Object(V.jsx)("legend",{children:"Paciente"}),Object(V.jsxs)(he.a.Row,{children:[Object(V.jsxs)(he.a.Group,{as:H.a,sm:!0,controlId:"carnet_paciente",children:[Object(V.jsx)(he.a.Label,{children:"N\xba Carnet"}),Object(V.jsx)(he.a.Control,{type:"text",isInvalid:s.completed&&!s.error&&!s.data.length,onChange:d,onBlur:j,value:n.carnet})]}),Object(V.jsxs)(he.a.Group,{as:H.a,sm:9,controlId:"nombre_paciente",children:[Object(V.jsx)(he.a.Label,{children:"Nombre"}),Object(V.jsx)(he.a.Control,{as:_e,loading:!1===s.completed,placeholder:!1===s.completed?"Buscando":s.error?"Error":"",readOnly:!0,type:"text",value:n.nombre.toUpperCase()})]})]}),Object(V.jsxs)(he.a.Row,{children:[Object(V.jsxs)(he.a.Group,{as:H.a,sm:9,controlId:"empresa",children:[Object(V.jsx)(he.a.Label,{children:"Empresa"}),Object(V.jsx)(he.a.Control,{as:_e,loading:!1===s.completed,placeholder:!1===s.completed?"Buscando":s.error?"Error":"",readOnly:!0,type:"text",value:n.empresa.nombre.toUpperCase()})]}),Object(V.jsxs)(he.a.Group,{as:H.a,sm:!0,controlId:"estado",children:[Object(V.jsx)(he.a.Label,{children:"Estado"}),Object(V.jsx)(he.a.Control,{as:_e,loading:!1===s.completed,placeholder:!1===s.completed?"Buscando":s.error?"Error":"",readOnly:!0,type:"text",isInvalid:"Mora"==n.empresa.estado,value:n.empresa.estado.toUpperCase()})]})]})]})};var Ue=function(){var e=Object(a.useState)({paciente:{id:0,carnet:"",nombre:"",empresa:{nombre:"",estado:""}},doctor:{id:0,nombre:""},proveedor:{id:0,nombre:"",servicios:[]},servicios:[]}),t=Object(re.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({id:0,nota:""}),i=Object(re.a)(r,2),o=i[0],s=i[1],l=Object(a.useCallback)((function(e){c(Object(O.a)(Object(O.a)({},n),{},{doctor:E.find((function(t){return t.id==parseInt(e.target.value)}))||{id:0,nombre:""}}))}),[n]),j=Object(a.useCallback)((function(e){c(Object(O.a)(Object(O.a)({},n),{},{proveedor:w.find((function(t){return t.id==parseInt(e.target.value)}))||{id:0,nombre:"",servicios:[]}}))}),[n]),b=Object(a.useRef)(Math.random());console.log("Random",b);var u=Re((function(){return fetch(Ae.a+"/transferencias",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({paciente_id:n.paciente.id,doctor_id:n.doctor.id,proveedor_id:n.proveedor.id,servicios_ids:n.servicios.map((function(e){return e.id}))})})}),[n]),p=Object(re.a)(u,2),h=p[0],m=p[1],x=Object(a.useCallback)((function(e){e.preventDefault(),m()}),[]),f=Re((function(){return Promise.all([fetch(Ae.a+"/doctores"),fetch(Ae.a+"/proveedores"),fetch(Ae.a+"/servicios")])}),[]),v=Object(re.a)(f,2),g=v[0],y=v[1],I=g.data||[[],[],[]],C=Object(re.a)(I,3),E=C[0],w=C[1],N=C[2],_=Object(a.useState)(w),D=Object(re.a)(_,2),S=D[0],T=D[1],L=Object(a.useState)(N),R=Object(re.a)(L,2),A=R[0],F=R[1];Object(a.useEffect)((function(){return y()}),[]),Object(a.useEffect)((function(){if(g.completed&&!g.error){var e=w.filter((function(e){return n.servicios.every((function(t){return e.servicios.some((function(e){return e.id==t.id}))}))}));T(e),e.some((function(e){return e.id==n.proveedor.id}))||c(Object(O.a)(Object(O.a)({},n),{},{proveedor:{id:0,nombre:"",servicios:[]}})),1==e.length&&c(Object(O.a)(Object(O.a)({},n),{},{proveedor:e[0]}));var t=N.filter((function(t){return e.some((function(e){return!n.servicios.some((function(e){return e.id==t.id}))&&e.servicios.some((function(e){return e.id==t.id}))}))}));F(t)}}),[n.servicios,g]);var M=function(){var e=h.data&&h.data.url;return e?Object(V.jsx)(Te,{url:e,height:400}):null};return console.log("FormState",n),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("h1",{children:"Transferencia externa"}),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(he.a,{style:{marginTop:20,marginBottom:20},onSubmit:x,children:[Object(V.jsx)(Me,{disabled:!1===h.completed,paciente:n.paciente,onChange:function(e){c(Object(O.a)(Object(O.a)({},n),{},{paciente:e}))}}),Object(V.jsxs)("fieldset",{disabled:!1===h.completed,children:[Object(V.jsx)("legend",{children:"Doctor"}),Object(V.jsxs)(he.a.Group,{controlId:"doctor",children:[Object(V.jsx)(he.a.Label,{children:"Nombre"}),Object(V.jsxs)(he.a.Control,{as:"select",type:"text",onChange:l,value:n.doctor.id,children:[Object(V.jsx)("option",{id:"0"}),E.map((function(e){return Object(V.jsx)("option",{id:String(e.id),value:String(e.id),children:e.nombre},e.id)}))]})]})]}),Object(V.jsxs)("fieldset",{disabled:!1===h.completed,children:[Object(V.jsx)("legend",{children:"Servicios"}),Object(V.jsxs)(Z.a,{children:[Object(V.jsx)("thead",{children:Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{style:{width:0},children:"#"}),Object(V.jsx)("th",{children:"Nombre"}),Object(V.jsx)("th",{children:"Nota"}),Object(V.jsx)("th",{style:{width:0}})]})}),Object(V.jsxs)("tbody",{children:[n.servicios.map((function(e,t){return Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{children:t+1}),Object(V.jsx)("td",{children:e.nombre}),Object(V.jsx)("td",{children:e.nota}),Object(V.jsx)("td",{children:Object(V.jsx)(pe.a,{variant:"link",onClick:function(){c(Object(O.a)(Object(O.a)({},n),{},{servicios:n.servicios.filter((function(e,n){return t!=n}))}))},className:"btn-icon",children:Object(V.jsx)(oe.f,{})})})]})})),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{children:n.servicios.length+1}),Object(V.jsx)("td",{children:Object(V.jsxs)(he.a.Control,{as:"select",value:o.id,onChange:function(e){console.log("onChange required service",e.target.value),s(Object(O.a)(Object(O.a)({},o),{},{id:parseInt(e.target.value)}))},children:[Object(V.jsx)("option",{id:"0"}),A.map((function(e){return Object(V.jsx)("option",{id:String(e.id),value:String(e.id),children:e.nombre},e.id)}))]})}),Object(V.jsx)("td",{children:Object(V.jsx)(he.a.Control,{as:"textarea",value:o.nota,onChange:function(e){s(Object(O.a)(Object(O.a)({},o),{},{nota:e.target.value}))}})}),Object(V.jsx)("td",{children:Object(V.jsx)(pe.a,{variant:"link",onClick:function(){console.log("Required Service",o);var e=N.find((function(e){return e.id==o.id}));e&&(c(Object(O.a)(Object(O.a)({},n),{},{servicios:[].concat(Object(d.a)(n.servicios),[{id:e.id,nombre:e.nombre,nota:o.nota}])})),s({id:0,nota:""}))},className:"btn-icon",children:Object(V.jsx)(oe.g,{})})})]})]})]})]}),Object(V.jsxs)("fieldset",{disabled:!1===h.completed,children:[Object(V.jsx)("legend",{children:"Proveedor"}),Object(V.jsxs)(he.a.Group,{controlId:"doctor",children:[Object(V.jsx)(he.a.Label,{children:"Nombre"}),Object(V.jsxs)(he.a.Control,{as:"select",type:"text",onChange:j,value:n.proveedor.id,children:[Object(V.jsx)("option",{id:"0"}),S.map((function(e){return Object(V.jsx)("option",{id:String(e.id),value:String(e.id),children:e.nombre},e.id)}))]})]})]}),Object(V.jsxs)(pe.a,{variant:"primary",type:"submit",children:[!1===h.completed&&Object(V.jsx)(Ne.a,{animation:"border",size:"sm"})," Guardar"]})]}),Object(V.jsxs)(Oe.a,{show:h.data&&!h.error,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(V.jsx)(Oe.a.Header,{closeButton:!0,children:Object(V.jsx)(Oe.a.Title,{id:"contained-modal-title-vcenter",children:"D.M. - 11"})}),Object(V.jsx)(Oe.a.Body,{children:M()}),Object(V.jsx)(Oe.a.Footer,{children:Object(V.jsx)(pe.a,{children:"Close"})})]})]}),Object(V.jsxs)(Oe.a,{show:!g.completed,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(V.jsx)(Oe.a.Header,{children:Object(V.jsx)(Oe.a.Title,{id:"contained-modal-title-vcenter",children:"Cargando"})}),Object(V.jsx)(Oe.a.Body,{children:Object(V.jsx)(Ne.a,{animation:"border"})})]})]})},Pe=function(){var e=Object(o.c)((function(e){return e.main.showSidebar})),t=Object(Y.g)(),n=(t.path,t.url);return Object(V.jsxs)("div",{className:"position-relative d-flex flex-grow-1 bg-light"+(e?"":" toggled"),id:"wrapper",children:[Object(V.jsx)(X,{className:"bg-white shadow-sm ",style:{height:"initial"},items:[{id:"visits",path:"".concat(n,"/consultas"),title:"Consultas"},{id:"transfers",path:"".concat(n,"/transferencias"),title:"Transferencias"}]}),Object(V.jsx)(K.a,{className:"d-flex flex-column flex-grow-1",style:{overflow:"auto"},children:Object(V.jsx)(Ue,{})})]})},ke=n(91),ze=(n(110),n(111),function(){var e=Object(o.b)();return Object(V.jsxs)(W.a,{children:[Object(V.jsxs)(k.a,{className:"shadow-sm border-bottom",bg:"white",variant:"light",style:{zIndex:1},children:[Object(V.jsx)(k.a.Toggle,{style:{display:"initial"},onClick:function(){e({type:"TOGGLE_SIDEBAR"})},children:Object(V.jsx)(oe.a,{})}),Object(V.jsx)(k.a.Brand,{href:"#home",className:"ml-4",children:"Hipocrates"}),Object(V.jsxs)(z.a,{className:"ml-auto",children:[Object(V.jsx)(B.a,{trigger:"click",placement:"bottom",overlay:Object(V.jsxs)(G.a,{id:"apps",children:[Object(V.jsx)(G.a.Title,{className:"text-center",as:"h3",children:"Aplicaciones"}),Object(V.jsxs)(G.a.Content,{children:[Object(V.jsxs)(q.a,{children:[Object(V.jsx)(H.a,{className:"text-center",children:Object(V.jsxs)(W.b,{to:"/rrhh",children:[Object(V.jsx)(oe.e,{size:48}),Object(V.jsx)("span",{children:"Recursos Humanos"})]})}),Object(V.jsx)(H.a,{className:"text-center",children:Object(V.jsxs)(W.b,{to:"/consultorio",children:[Object(V.jsx)(oe.e,{size:48}),Object(V.jsx)("span",{children:"Consultorio"})]})}),Object(V.jsxs)(H.a,{className:"text-center",children:[Object(V.jsx)(oe.e,{size:48}),Object(V.jsx)("span",{style:{whiteSpace:"nowrap"},children:"App Name"})]})]}),Object(V.jsxs)(q.a,{children:[Object(V.jsxs)(H.a,{className:"text-center",children:[Object(V.jsx)(oe.e,{size:48}),Object(V.jsx)("span",{style:{whiteSpace:"nowrap"},children:"App Name"})]}),Object(V.jsxs)(H.a,{className:"text-center",children:[Object(V.jsx)(oe.e,{size:48}),Object(V.jsx)("span",{style:{whiteSpace:"nowrap"},children:"App Name"})]}),Object(V.jsxs)(H.a,{className:"text-center",children:[Object(V.jsx)(oe.e,{size:48}),Object(V.jsx)("span",{style:{whiteSpace:"nowrap"},children:"App Name"})]})]}),Object(V.jsxs)(q.a,{children:[Object(V.jsxs)(H.a,{className:"text-center",children:[Object(V.jsx)(oe.e,{size:48}),Object(V.jsx)("span",{style:{whiteSpace:"nowrap"},children:"App Name"})]}),Object(V.jsxs)(H.a,{className:"text-center",children:[Object(V.jsx)(oe.e,{size:48}),Object(V.jsx)("span",{style:{whiteSpace:"nowrap"},children:"App Name"})]}),Object(V.jsxs)(H.a,{className:"text-center",children:[Object(V.jsx)(oe.e,{size:48}),Object(V.jsx)("span",{style:{whiteSpace:"nowrap"},children:"App Name"})]})]})]})]}),children:Object(V.jsx)(z.a.Link,{href:"#",children:Object(V.jsx)(ke.a,{size:"1.5em"})})}),Object(V.jsx)(B.a,{trigger:"click",placement:"bottom",overlay:Object(V.jsxs)(G.a,{id:"apps",children:[Object(V.jsx)(G.a.Title,{className:"text-center",as:"h3",children:"Notificaciones"}),Object(V.jsx)(G.a.Content,{})]}),children:Object(V.jsxs)(z.a.Link,{href:"#",style:{whiteSpace:"nowrap"},children:[Object(V.jsx)(oe.b,{}),Object(V.jsx)("div",{className:"pulse bg-danger",style:{left:"0.65rem",top:"-1.35rem",width:"0.45rem",height:"0.45rem",borderRadius:"50%"}})]})}),Object(V.jsxs)(J.a,{title:Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(oe.i,{}),Object(V.jsx)("span",{className:"d-none d-sm-inline ml-1",children:"1234567890"})]}),menuAlign:"right",id:"collasible-nav-dropdown",children:[Object(V.jsx)(J.a.Item,{href:"#action/3.2",children:"Cuenta"}),Object(V.jsx)(J.a.Item,{href:"#action/3.3",children:"Configuracion"}),Object(V.jsx)(J.a.Divider,{}),Object(V.jsx)(J.a.Item,{href:"#",children:"Cerrar sesi\xf3n"})]})]})]}),Object(V.jsxs)(Y.d,{children:[Object(V.jsx)(Y.b,{path:"/rrhh",children:Object(V.jsx)(we,{})}),Object(V.jsx)(Y.b,{path:"/consultorio",children:Object(V.jsx)(Pe,{})})]})]})});i.a.render(Object(V.jsx)(c.a.StrictMode,{children:Object(V.jsx)(o.a,{store:U,children:Object(V.jsx)(ze,{})})}),document.getElementById("root")),P(console.log)},48:function(e){e.exports=JSON.parse('{"a":"https://cscra2.mybluemix.net/api"}')},83:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.6ede8098.chunk.js.map
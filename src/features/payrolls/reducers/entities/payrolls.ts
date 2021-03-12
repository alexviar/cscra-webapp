import {Payroll} from '../../state'

const initialState: Payroll[] = [
  // {
  //   id: 1,
  //   startDate: "2020-01-01",
  //   endDate: "2020-01-31",
  //   title: "Planilla de sueldos mes de enero",
  //   typeId: 1
  // },
  // {
  //   id: 2,
  //   startDate: "2020-02-01",
  //   endDate: "2020-02-29",
  //   title: "Planilla de sueldos mes de febrero",
  //   typeId: 1
  // },
  // {
  //   id: 3,
  //   startDate: "2020-03-01",
  //   endDate: "2020-03-31",
  //   title: "Planilla de sueldos mes de marzo",
  //   typeId: 1
  // },
  // {
  //   id: 4,
  //   startDate: "2020-04-01",
  //   endDate: "2020-04-30",
  //   title: "Planilla de sueldos mes de abril",
  //   typeId: 1
  // },
  // {
  //   id: 5,
  //   startDate: "2020-05-01",
  //   endDate: "2020-05-31",
  //   title: "Planilla de sueldos mes de mayo",
  //   typeId: 1
  // },
  // {
  //   id: 6,
  //   startDate: "2020-06-01",
  //   endDate: "2020-06-30",
  //   title: "Planilla de sueldos mes de junio",
  //   typeId: 1
  // },
  // {
  //   id: 7,
  //   startDate: "2020-07-01",
  //   endDate: "2020-07-31",
  //   title: "Planilla de sueldos mes de julio",
  //   typeId: 1
  // },
  // {
  //   id: 8,
  //   startDate: "2020-08-01",
  //   endDate: "2020-08-31",
  //   title: "Planilla de sueldos mes de agosto",
  //   typeId: 1
  // },
  // {
  //   id: 9,
  //   startDate: "2020-09-01",
  //   endDate: "2020-09-30",
  //   title: "Planilla de sueldos mes de septiembre",
  //   typeId: 1
  // },
  // {
  //   id: 10,
  //   startDate: "2020-10-01",
  //   endDate: "2020-10-31",
  //   title: "Planilla de sueldos mes de octubre",
  //   typeId: 1
  // },
  // {
  //   id: 11,
  //   startDate: "2020-11-01",
  //   endDate: "2020-11-30",
  //   title: "Planilla de sueldos mes de noviembre",
  //   typeId: 1
  // },
  // {
  //   id: 12,
  //   startDate: "2020-01-01",
  //   endDate: "2020-12-15",
  //   title: "Aguinaldos 2020",
  //   typeId: 2
  // },
  // {
  //   id: 13,
  //   startDate: "2020-12-01",
  //   endDate: "2020-12-31",
  //   title: "Planilla de sueldos mes de diciembre",
  //   typeId: 1
  // }
]

export default (state: Payroll[]=initialState, action: any): Payroll[]=>{
  if(action.type == "ADD_PAYROLL"){
    return [
      ...state,
      action.payload,
    ]
  }
  return state
}
import { takeEvery, put, select, all } from 'redux-saga/effects'

function* prepareUnitForm(action: any){
  const unit = yield select((state)=>state.organization.entities.units.find((u: any)=>u.id == action.payload.id))
  yield put({type: "UPDATE_UNIT_FORM", payload: {
    fields: {
      id: unit.id,
      name: unit.name,
      description: unit.description,
      parentId: unit.parentId
    }
  }})

  yield put({
    type: "SHOW_MODAL",
    payload: {
      show: true,
      target: "unit",
      id: null
    }
  })
}

function* prepareNewUnitForm(action: any){
  //const unit = yield select((state)=>state.organization.entities.units.find((u: any)=>u.id == action.payload.id))
  yield put({type: "UPDATE_UNIT_FORM", payload: {
    fields: {
      id: null,
      name: "",
      description: "",
      parentId: action.payload.parentId
    }
  }})

  yield put({
    type: "SHOW_MODAL",
    payload: {
      show: true,
      target: "unit",
      id: null
    }
  })
}

function* prepareJobForm(action: any){
  const job = yield select((state)=>state.organization.entities.jobs.find((u: any)=>u.id == action.payload.id))
  yield put({type: "UPDATE_JOB_FORM", payload: {
    fields: {
      id: job.id,
      name: job.name,
      description: job.description,
      isManager: job.isManager,
      unitId: job.unitId
    }
  }})

  yield put({
    type: "SHOW_MODAL",
    payload: {
      show: true,
      target: "job",
      id: null
    }
  })
}

function* prepareNewJobForm(action: any){
  //const unit = yield select((state)=>state.organization.entities.units.find((u: any)=>u.id == action.payload.id))
  yield put({type: "UPDATE_JOB_FORM", payload: {
    fields: {
      id: null,
      name: "",
      description: "",
      isManager: false,
      unitId: action.payload.unitId
    }
  }})

  yield put({
    type: "SHOW_MODAL",
    payload: {
      show: true,
      target: "job",
      id: null
    }
  })
}


export default function* watchPrepareUnitForm(){
  yield all([
    takeEvery("PREPARE_UNIT_FORM", prepareUnitForm),
    takeEvery("PREPARE_NEW_UNIT_FORM", prepareNewUnitForm),
    takeEvery("PREPARE_JOB_FORM", prepareJobForm),
    takeEvery("PREPARE_NEW_JOB_FORM", prepareNewJobForm),
  ])
}
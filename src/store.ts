import { combineReducers, createStore, applyMiddleware  } from "redux";
import createSagaMiddleware from "redux-saga"
import organization from "./features/organization/reducers";
import employee from "./features/employees/reducers";
import main from "./boostrap/reducers";
import mySaga from './features/organization/actions';

const rootReducer = combineReducers({
  organization,
  employee,
  main
})

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)


export default store
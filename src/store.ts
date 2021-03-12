import { combineReducers, createStore, applyMiddleware, compose  } from "redux";
import createSagaMiddleware from "redux-saga"
import organization from "./features/organization/reducers";
import employee from "./features/employees/reducers";
import payrolls from "./features/payrolls/reducers";
import auth from "./features/auth/reducers";
import iam from "./features/iam/reducers";
import main from "./boostrap/reducers";
import mySaga from './features/organization/actions';
// import { composeWithDevTools } from 'redux-devtools-extension';

//@ts-ignore
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  organization,
  employee,
  payrolls,
  iam,
  main,
  auth
})

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

// then run the saga
sagaMiddleware.run(mySaga)


export default store
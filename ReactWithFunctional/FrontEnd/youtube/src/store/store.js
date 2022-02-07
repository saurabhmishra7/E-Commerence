import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { watcherSaga } from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

export default store;
sagaMiddleware.run(watcherSaga);
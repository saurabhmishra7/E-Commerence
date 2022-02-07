import { all } from "redux-saga/effects";
import { cartSaga } from "../cart/cartSaga";

export function* watcherSaga() {
  yield all([cartSaga()]);
}

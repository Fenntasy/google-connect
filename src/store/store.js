import { createStore } from "redux";
import userReducer from "./user/reducer"

let store = createStore(userReducer);

export default store;

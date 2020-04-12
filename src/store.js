import { createStore } from "redux";

import myReducer from "./reducers/index";

export default createStore(
	myReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

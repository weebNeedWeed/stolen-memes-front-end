import { combineReducers } from "redux";

import memes from "./memes";
import dialog from "./dialog";
import count from "./pagination";

export default combineReducers({
	memes,
	dialog,
	count
});

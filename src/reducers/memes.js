import * as types from "../constants/actionTypes";

let initialState = {
	list: {},
	count: 0
};

let myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.MEME_FETCH:
			return {
				...state,
				list: action.json.memes === [] ? {} : action.json.memes,
				count: action.json.count
			};
		default:
			return state;
	}
};
export default myReducer;

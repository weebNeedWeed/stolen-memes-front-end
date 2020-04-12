import * as types from "./../constants/actionTypes";

const initialState = 1;

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_PAGE_COUNT:
			return action.page;
		default:
			return state;
	}
};

export default myReducer;

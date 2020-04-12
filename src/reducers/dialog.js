import * as types from "./../constants/actionTypes";

const initialState = {
	title: "",
	content: ""
};

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SEND_MESSAGE:
			return {
				title: action.title,
				content: action.content
			};
		default:
			return state;
	}
};

export default myReducer;

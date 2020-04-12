import * as types from "../constants/actionTypes";

export function listAll() {
	return {
		type: types.MEME_LIST_ALL
	};
}
export function fetchMeme(json) {
	return {
		type: types.MEME_FETCH,
		json
	};
}
export function sendMessage(title, content) {
	return {
		type: types.SEND_MESSAGE,
		title,
		content
	};
}
export function updatePage(page) {
	return {
		type: types.UPDATE_PAGE_COUNT,
		page
	};
}

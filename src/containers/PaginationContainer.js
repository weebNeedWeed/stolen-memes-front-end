import React from "react";

import { connect } from "react-redux";

import Pagination from "./../components/Pagination";

import * as actions from "./../actions/index";

const PaginationContainer = (props) => {
	return <Pagination {...props} />;
};

const mapStateToProps = (state) => {
	return {
		count: state.memes.count,
		pageCount: state.count
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMeme: (data) => dispatch(actions.fetchMeme(data)),
		updatePage: (page) => dispatch(actions.updatePage(page))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PaginationContainer);

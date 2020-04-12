import React from "react";
import Dialog from "./../components/Dialog";

import * as actions from "./../actions/index";

import { connect } from "react-redux";

const DialogContainer = (props) => {
	let render = props.dialog.title === "" ? null : <Dialog {...props} />;
	return render;
};

const mapStateToProps = (state) => {
	return {
		dialog: state.dialog
	};
};

const mapDisPatchToProps = (dispatch) => {
	return {
		closeDialog: () => dispatch(actions.sendMessage("", ""))
	};
};

export default connect(mapStateToProps, mapDisPatchToProps)(DialogContainer);

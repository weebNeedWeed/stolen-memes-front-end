import React from "react";

import UploadForm from "./../components/UploadForm";

import { connect } from "react-redux";

import * as actions from "./../actions/index";

const UploadFormContainer = (props) => {
	return <UploadForm {...props} />;
};

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (title, content) =>
			dispatch(actions.sendMessage(title, content))
	};
};

export default connect(null, mapDispatchToProps)(UploadFormContainer);

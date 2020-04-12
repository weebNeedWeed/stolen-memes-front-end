import React, { Component } from "react";

import UploadFormContainer from "../../containers/UploadFormContainer";

export default class extends Component {
	render() {
		return (
			<div className="upload-container u-margin-top-bottom-big">
				<UploadFormContainer />
			</div>
		);
	}
}

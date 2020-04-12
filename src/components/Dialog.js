import React from "react";

const Dialog = ({ dialog, closeDialog }) => {
	return (
		<div className="dialog">
			<div className="u-center-text">
				<h3 className="dialog__message">{dialog.title}</h3>
			</div>
			<button className="dialog__close" onClick={closeDialog}>
				x
			</button>
			<div className="dialog__content">{dialog.content}</div>
		</div>
	);
};

export default Dialog;

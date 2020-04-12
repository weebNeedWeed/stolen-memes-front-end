import React from "react";

export default function(props) {
	return (
		<div className="image-showcase__list">
			<div className="u-center-text u-margin-bottom-small">
				<h1 className="heading-primary">memes</h1>
			</div>
			{props.children}
		</div>
	);
}

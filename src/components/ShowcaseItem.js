import React from "react";

function ShowcaseItem(props) {
	return <div className="row">{showSubItem(props.items)}</div>;
}

function showSubItem(items) {
	return items.map((elm, index) => {
		return (
			<div className="col span-1-of-2" key={index}>
				<div className="image-card">
					<div className="image-card__source">
						<a
							href={elm.link}
							target="_blank"
							rel="noopener noreferrer"
							className="image-card__link"
						>
							source
						</a>
					</div>
					<img
						src={elm.link}
						alt="pt"
						className="image-card__image"
					/>
				</div>
			</div>
		);
	});
}

export default ShowcaseItem;

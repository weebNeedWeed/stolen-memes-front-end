import React from "react";

import { Link, useRouteMatch } from "react-router-dom";

export default function({ label, to, activeOnlyWhenExact }) {
	let match = useRouteMatch({
		path: to,
		exact: activeOnlyWhenExact
	});
	let className = match
		? "navigation__link--active navigation__link"
		: "navigation__link";
	return (
		<li className="navigation__item">
			<Link to={to} className={className}>
				{label}
			</Link>
		</li>
	);
}

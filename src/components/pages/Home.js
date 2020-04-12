import React from "react";

import ShowcaseContainer from "../../containers/ShowcaseConntainer";
import PaginationContainer from "../../containers/PaginationContainer";

// import { useParams, useRouteMatch } from "react-router-dom";

export default function(props) {
	return (
		<div className="image-showcase">
			<div className="row">
				<ShowcaseContainer />
				<PaginationContainer />
			</div>
		</div>
	);
}

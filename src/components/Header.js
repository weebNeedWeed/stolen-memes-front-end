import React, { Fragment } from "react";

import CustomNavLink from "./custom/CustomNavLink";

export default function(props) {
	return (
		<Fragment>
			<div className="circle"></div>
			<header className="header">
				<div className="navigation">
					<div className="navigation__bar">
						<ul className="navigation__list">
							<CustomNavLink
								label="Home"
								to="/"
								activeOnlyWhenExact={true}
							/>
							<CustomNavLink
								label="Upload"
								to="/upload"
								activeOnlyWhenExact={true}
							/>
							<CustomNavLink
								label="AboutUs"
								to="/about"
								activeOnlyWhenExact={true}
							/>
						</ul>
					</div>
				</div>
			</header>
		</Fragment>
	);
}

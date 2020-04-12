import React from "react";

import Showcase from "./../components/Showcase";
import ShowcaseItem from "./../components/ShowcaseItem";

import { connect } from "react-redux";

function ShowcaseContainer(props) {
	return <Showcase>{showItems(props.memes)}</Showcase>;
}

function showItems(items) {
	let a, b;
	a = [];
	b = [];
	let x = -1;
	for (let i in items) {
		x++;
		a.push(items[i]);
		if (x % 2 !== 0 || x === Object.keys(items).length - 1) {
			b.push(a);
			a = [];
		}
	}
	return b.map((elm, index) => {
		return <ShowcaseItem key={index} items={elm} />;
	});
}

const mapStateToProps = (state) => {
	return {
		memes: state.memes.list
	};
};

export default connect(mapStateToProps, null)(ShowcaseContainer);

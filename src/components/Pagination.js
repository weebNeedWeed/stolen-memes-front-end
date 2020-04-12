import React, { Component } from "react";

// import { Link } from "react-router-dom";

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			perPage: 5,
			numItems: 5,
			currentItem: 1
		};
	}
	UNSAFE_componentWillMount() {
		let { perPage, currentItem } = this.state;
		this.fetchMeme(currentItem, perPage);
	}
	componentDidUpdate() {}

	render() {
		this.props.updatePage(
			this.props.count % this.state.perPage === 0
				? this.props.count / this.state.perPage
				: Math.floor(this.props.count / this.state.perPage) + 1
		);
		this.showPagingItems(this.state);
		return (
			<div className="pagination u-margin-top-big">
				<div className="u-center-text">
					<div className="pagination__bar">
						{this.showPagingItems(this.state)}
					</div>
				</div>
			</div>
		);
	}

	fetchMeme(page, perPage) {
		this.setState({ currentItem: page });
		(async function() {
			let req = await fetch(`/rest/meme?page=${page}&perPage=${perPage}`);
			let json = await req.json();
			this.props.fetchMeme(json);
		}.bind(this)());
	}

	onHandleClick(event, page, perPage) {
		event.preventDefault();
		this.fetchMeme(page, perPage);
	}

	showPagingItems({ numItems, currentItem }) {
		let count = this.props.pageCount;
		let pre, next;
		pre = numItems % 2 === 0 ? numItems / 2 - 1 : (numItems - 1) / 2;
		next = numItems - pre - 1;
		let a = [];
		currentItem - 1 > 0 &&
			a.push(
				<div
					key={currentItem - next}
					className="pagination__button-wrap"
				>
					<a
						href="l"
						className="pagination__button pagination__button--arrow"
						onClick={(event) =>
							this.onHandleClick(
								event,
								this.state.currentItem - 1,
								this.state.perPage
							)
						}
					>
						&larr;
					</a>
				</div>
			);
		for (let i = currentItem - pre; i <= currentItem + next; ++i) {
			if (i >= 1 && i <= count) {
				if (i === currentItem) {
					a.push(
						<div key={i} className="pagination__button-wrap">
							<a
								href="lmao"
								className="pagination__button pagination__button--current"
								onClick={(event) =>
									this.onHandleClick(
										event,
										i,
										this.state.perPage
									)
								}
							>
								{i}
							</a>
						</div>
					);
				} else {
					a.push(
						<div key={i} className="pagination__button-wrap">
							<a
								href="a"
								className="pagination__button"
								onClick={(event) =>
									this.onHandleClick(
										event,
										i,
										this.state.perPage
									)
								}
							>
								{i}
							</a>
						</div>
					);
				}
			}
		}
		currentItem + 1 <= count &&
			a.push(
				<div
					key={currentItem + pre}
					className="pagination__button-wrap"
				>
					<a
						href="d"
						className="pagination__button pagination__button--arrow"
						onClick={(event) =>
							this.onHandleClick(
								event,
								this.state.currentItem + 1,
								this.state.perPage
							)
						}
					>
						&rarr;
					</a>
				</div>
			);
		return a;
	}
}

export default Pagination;

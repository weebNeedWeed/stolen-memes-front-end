import React, { Component } from "react";

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			link: ""
		};
	}

	onHandleChange = (event) => {
		let target = event.target;
		let name = target.name;
		let value = target.value;
		this.setState({
			[name]: value
		});
	};

	onSubmitForm = (event) => {
		let { link } = this.state;
		event.preventDefault();
		if (link !== "") {
			let form = new FormData();
			form.append("link", link);
			let req = fetch("/rest/meme", {
				method: "post",
				body: form
			});
			req.then((data) => {
				if (!data.ok) {
					this.props.sendMessage("alert", "that bai");
				} else this.props.sendMessage("alert", "thanh cong");
			});
		} else this.props.sendMessage("alert", "chua nhap du lieu");
	};

	render() {
		return (
			<form action="" className="form" onSubmit={this.onSubmitForm}>
				<div className="u-center-text u-margin-bottom-small">
					<h3 className="heading-secondary">upload</h3>
				</div>
				<div className="form__group">
					<label className="form__label">link</label>
					<input
						type="text"
						className="form__input"
						name="link"
						value={this.state.link}
						onChange={this.onHandleChange}
					/>
				</div>
				<div className="u-center-text">
					<button
						type="submit"
						className="btn btn--white btn__animated btn__animated--red"
						name="btn"
					>
						upload
					</button>
				</div>
			</form>
		);
	}
}

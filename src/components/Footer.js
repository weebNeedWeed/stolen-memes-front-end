import React from "react";

export default function(props) {
	return (
		<footer className="footer">
			<div className="u-center-text">
				<hr className="footer__path" />
			</div>
			<div className="footer__text-box">
				<p className="footer__text footer__text--1">
					Copyright 2020 &copy; stolen memes
				</p>
				<div className="footer__text footer__text--2">
					written by
					<span className="footer__author">
						<a
							href="https://www.facebook.com/kt.pl.1912"
							className="footer__author-link"
						>
							-273,13&#176;C
						</a>
						<p className="footer__more-info u-center-text">
							độ không tuyệt đối
						</p>
					</span>
				</div>
			</div>
		</footer>
	);
}

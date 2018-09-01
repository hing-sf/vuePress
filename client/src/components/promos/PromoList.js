import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPromos } from "../../actions";

class PromoList extends Component {
	componentDidMount() {
		this.props.fetchPromos();
	}

	renderPromos() {
		return this.props.promos.reverse().map(promo => {
			return (
				<div className="card darken-1" key={promo._id}>
					<div className="card-content">
						<h6>
							Type: <span>{promo.type}</span>
						</h6>
						<p>
							Title: <span>{promo.title}</span>
						</p>
						<p>Sent On: {new Date(promo.dateSent).toLocaleDateString()}</p>
						<p className="right">
							<a className="waves-effect waves-light btn">
								<i className="material-icons right">cloud</i>
								button
							</a>
						</p>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderPromos()}</div>;
	}
}

function mapStateToProps({ promos }) {
	return { promos };
}

export default connect(
	mapStateToProps,
	{ fetchPromos }
)(PromoList);

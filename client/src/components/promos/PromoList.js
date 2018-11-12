import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPromos, deletePromo } from "../../actions";

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
						<ul key="{promo._id}">
							<li>
								Title: <span>{promo.title}</span>
							</li>
							<li>
								ID: <span>{promo._id}</span>
							</li>
						</ul>
						<p />
						<p />
						<p>Sent On: {new Date(promo.dateSent).toLocaleDateString()}</p>
						<p className="right">
							<button

								className="btn-floating btn-small red">
								<i className="material-icons right">delete</i>
							</button>
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

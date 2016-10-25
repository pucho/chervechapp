import React from 'react';

class Beer extends React.Component {
	render() {
		const details = this.props.details;
		return (
			<div className="menu-beer col-xs-12">
				<div className="col-xs-2 beer-image">
					<img src={details.image} alt={details.name} className="img-responsive" />
				</div>
				<div className="col-xs-8 beer-details">
					<h3 className="beer-name">
						{details.name}
					</h3>
					<p>{details.desc}</p>
				</div>
				<div className="col-xs-2 price-card">
					<span className="price">${details.price}</span>
					<button type="button" className="btn btn-default">Default</button>
				</div>
			</div>
		)
	}
}

export default Beer;

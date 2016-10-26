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
					<a onClick={ () => this.props.addToOrder(this.props.index)}>
						<i className="fa fa-chevron-up" aria-hidden="true"></i>
					</a>
					<span className="price">${details.price}</span>
						<a onClick={ () => this.props.removeFromOrder(this.props.index)}>
							<i className="fa fa-chevron-down" aria-hidden="true"></i>
						</a>
				</div>
			</div>
		)
	}
}

export default Beer;

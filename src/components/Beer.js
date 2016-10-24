import React from 'react';

class Beer extends React.Component {
	render() {
		const details = this.props.details;
		const isAvailable = details.status === 'available';
		const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';

		return (
			<li className="menu-beer">
				<img src={details.image} alt={details.name} />
				<h3 className="beer-name">
					{details.name}
					<span className="price">{details.price}</span>
				</h3>
				<p>{details.desc}</p>
				<button
					disabled={!isAvailable}
					onClick={ () => this.props.addToOrder(this.props.index)}
					>
					{buttonText}
				</button>
			</li>
		)
	}
}

export default Beer;

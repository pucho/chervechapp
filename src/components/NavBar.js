import React from 'react';

class NavBar extends React.Component {
	componentDidMount() {

	}

	render() {
		const details = this.props.details;
		return (
			<div className="mynavbar row">
				<div className="col-xs-1">
					<img src="http://lorempixel.com/50/50" alt=""/>
				</div>
				<div className="col-xs-10">
						<span>{details.title}</span>
				</div>
				<div className="col-xs-1">
					<span><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
				</div>
      </div>
		)
	}
}

export default NavBar;

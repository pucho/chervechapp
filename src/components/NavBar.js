import React from 'react';

class NavBar extends React.Component {
	componentDidMount() {

	}

	render() {
		const details = this.props.details;
		return (
			<div className="mynavbar row">
				<div className="col-xs-1 ">
					<img className="logo"src={details.logo} alt=""/>
				</div>
				<div className="col-xs-10 separate-top-xs">
						<span>{details.title}</span>
				</div>
				<div className="col-xs-1 separate-top-xs">
					<span>
						<a onClick={ () => this.props.showOrder()}>
							<i className="fa fa-chevron-down" aria-hidden="true"></i>
						</a>
					</span>
				</div>
      </div>
		)
	}
}

export default NavBar;

import React from 'react';

class NavBar extends React.Component {
	componentDidMount() {

	}

	render() {
		const details = this.props.details;
		return (
			<div className="mynavbar row">
				<div className="col-xs-1 ">
					<img className="logo"src="http://mastra.com.uy/wp-content/uploads/2014/02/mastra-logo1.png" alt=""/>
				</div>
				<div className="col-xs-10 separate-top-xs">
						<span>{details.title}</span>
				</div>
				<div className="col-xs-1 separate-top-xs">
					<span><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
				</div>
      </div>
		)
	}
}

export default NavBar;

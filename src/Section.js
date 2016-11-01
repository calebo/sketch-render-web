import React from 'react';

export default class Section extends React.Component {
	render() {
		return (
			<div>
				<h1 className="sectionTitle">{this.props.params.sectionName}</h1>
			</div>
		)
	}
}
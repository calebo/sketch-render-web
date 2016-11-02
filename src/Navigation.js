import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import NavData from '!json!../data/navigation.json'

import _map from 'lodash/map'
import _lowerCase from 'lodash/lowercase'
import _flatten from 'lodash/flatten'

export default class Navigation extends React.Component {
	render() {
		return (			
			<nav className="navigation">
				<ul>
					{navItems.map((item, i) => (
					<li key={i}>
						<NavLink to={item}>{item}</NavLink>
						{ item.subsections && <SecondaryNavigation items={item.subsections}/> }
					</li>
					))}
				</ul>
			</nav>
		)
	}
}

var navItems = _map(NavData.data.attributes, 'name');

const SecondaryNavigation = (props) => {
	return (
		<ul>
			{props.items.map((item, i) => (
			<li key={i}>
				<Link to={item.path}>{item.name}</Link>
			</li>
			))}
		</ul>
	)
}
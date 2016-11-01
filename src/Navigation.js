import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';
import nav from '!json!../data/navigation.json';

export default class Navigation extends React.Component {
	render() {
		return (
			<nav className="navigation">
			<ul>
				{nav.map((item, i) => (
				<li key={i}>
					<NavLink to={item.path}>{item.name}</NavLink>
					{/* item.subnav && <SubNavigation items={item.subnav}/> */}
				</li>
				))}
			</ul>
			</nav>
		)
	}
}

const SubNavigation = (props) => {
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

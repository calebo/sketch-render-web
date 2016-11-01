import React from 'react'
import { Link } from 'react-router'
import data from '!json!../data/articles.json'

export default React.createClass({
  render() {
    return (
    	<div>
    		<h1>Home</h1>

			{data.map((item, i) => (
				<article key={i} data-id={item.id}>
					<Link to={item.slug}><h3>{item.title}</h3></Link>
				</article>
			))}
    	</div>
	)
  }
})
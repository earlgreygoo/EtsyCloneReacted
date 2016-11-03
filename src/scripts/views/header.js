import React from 'react'



var Header = React.createClass({
	render: function(){
		return (
			<div className="header">
				<h1> !Etsy </h1>
				<input type="text" placeholder="search" />
			</div>
			)
	}
})


export default Header

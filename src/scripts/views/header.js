import React from 'react'



var Header = React.createClass({
	_search: function(e){
		if(e.keyCode === 13) {
			location.hash = "search/" + e.target.value
			e.target.value = ""
		}
	},

	render: function(){

		return (
			<div className="header">
				<h1> !Etsy </h1>
				<input type="text" placeholder="search" onKeyDown={this._search} />
			</div>
			)
	}
})


export default Header

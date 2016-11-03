import React from "react"
import Header from "./header"


var DetailView = React.createClass({
	render: function(){
		console.log("detailView component", this)
		return (
			<div className="detailView-view">
				<Header />
				<Product collection={this.props.collection}/>
			</div>
			)
	}
})

var Product = React.createClass({
	render: function(){
		console.log("whaddup")
	}
})


export default DetailView
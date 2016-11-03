import React from "react"
import Header from "./header"

var ListView = React.createClass({
	render: function(){
		console.log("ListView component", this)
		return (
			<div className="home-view">
				<Header />
				<ProductContainer collection={this.props.collection}/>
			</div>
			)
	}
})


var ProductContainer = React.createClass({
	_makeProducts: function(){
		console.log(this.props)
		var jsxArray = []
		for(var i = 0; i < this.props.collection.models.length; i ++){
			console.log("hey")
			var productModel = this.props.collection.models[i]
			jsxArray.push(<Product model={productModel} />)
		}
		return jsxArray
	},
	render: function(){
		console.log("collection as seen from articleContainer", this.props.collection)
		return (
			<div className="article-container">
				{this._makeProducts()}
			</div>
			)
	}
})



var Product = React.createClass({
	render: function(){
		var model = this.props.model
		console.log("Model from inside the article component", model)
		return (
			<div className="image" onClick={this._clickedDiv}>

			</div>
			)
	}
})



export default ListView
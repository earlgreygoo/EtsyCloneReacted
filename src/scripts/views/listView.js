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
	
		var jsxArray = []
		for(var i = 0; i <this.props.collection.length; i ++){
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

	_clicked: function() {
		location.hash = "details/" + this.props.model.attributes.listing_id
	},

	render: function(){
		var model = this.props.model
		console.log("Model from inside the article component", model)
		return (
			<div className="productBox" > 
				<img src={model.attributes.MainImage.url_75x75} onClick={this._clicked}/>
			</div>
			)
	}
})



export default ListView
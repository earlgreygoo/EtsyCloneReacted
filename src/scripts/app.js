import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import ListView from './views/listView'
import detailView from './views/detailView'


var etsyKey = "0huv60c7gbl3v9unm8dt7u2t"


const app = function() {

	//MODEL


	var ProductCollection = Backbone.Collection.extend({  
	url: "https://openapi.etsy.com/v2/listings/active.js", 
	parse: function(rawResponse){ 
		var parsedResponse = rawResponse.results
		return parsedResponse; 
	}
})


var ProductModel = Backbone.Model.extend({
	url: function() {
		return "https://openapi.etsy.com/v2/listings/.js" + this.listing_id
	},
	parse: function(rawResponse) {
		var parsedResponse = rawResponse.response.docs[0]
		return parsedResponse
	}
})



//VIEWS 



	//CONTROLLER 

	var Controller = Backbone.Router.extend({ 
	routes: { 
 		"home": "handleHome", 
		"search/:term": "handleSearch",
		"details/:id": "handleDetails",
		"*default": "handleDefault",
		
	},
	handleHome: function(){
		
		var productCollection = new ProductCollection()

		var promise = productCollection.fetch({
			dataType: 'jsonp',
			data: {
				"api_key": etsyKey,
				"includes": "MainImage,shop"

			}
		})

		promise.then(function(){ReactDOM.render(<ListView collection={productCollection} />, document.querySelector('.container'))})



	},
	handleSearch: function(term){ 

		var productCollection = new ProductCollection()
			
		productCollection.fetch({
			dataType: 'jsonp',
			data: {

				"api_key": etsyKey,
				"keywords": term,
				"includes": "MainImage,shop"
			}
		}).then(function(){ReactDOM.render(<ListView collection={productCollection} />, document.querySelector('.container'))})
	},

	handleDetails: function(term) {
		var productModel = new ProductCollection(),
		view = new ListView({
			collection: productModel
		})
		productModel.fetch({
			datatype: 'jsonp',
			data: {

				"api_key": etsyKey,
				"listing_id": id
			}
		}).then(function(){ReactDOM.render(<DetailView collection={productCollection} />, document.querySelector('.container'))})
	},
	
	handleDefault: function(){ 
		location.hash = "home" 
	},
	initialize: function(){ 
		Backbone.history.start()
	}
})



var controller = new Controller()
	







	//ReactDOM.render(<Header/>,document.querySelector('.container'))
}

app()
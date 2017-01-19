import Backbone from 'backbone'

export const ProductCollection = Backbone.Collection.extend({  
	url: "https://openapi.etsy.com/v2/listings/active.js", 
	parse: function(rawResponse){ 
		var parsedResponse = rawResponse.results
		return parsedResponse; 
	}
})


export const ProductModel = Backbone.Model.extend({
	url: function() {
		return "https://openapi.etsy.com/v2/listings/.js" + this.listing_id
	},
	parse: function(rawResponse) {
		var parsedResponse = rawResponse.response.docs[0]
		return parsedResponse
	}
})
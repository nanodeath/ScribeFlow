var Page = Backbone.Model.extend({
	initialize: function(){
		this.set({"children": []});
	},
	addChild: function(child){
		this.get("children").push(child);
	}
});
var Pages = Backbone.Collection.extend({
	model: Page
});

var TemplateManager = new function(){
	var TM = this;
	var cache = {};
	var prefix = "/template",
		suffix = ".template";
	this.get = function(url, callback){
		url = prefix + url + suffix;
		var t = cache[url];
		if(t){
			if(callback)
				callback.call(TM, t);
		} else {
			$.ajax({
				url: url,
				cache: false,
				success: function(t){
					cache[url] = _.template(t);
					if(callback)
						callback.call(TM, cache[url]);
				}
			});
		}
	};
	this.clear = function(key){
		delete cache[prefix + key + suffix];
	};
	this.clearAll = function(){
		cache = {};
	};
	this.load = function(templates){
		$.extend(cache, templates);
	};
	this.preload = function(urls){
		_(urls).each(function(u){
			TM.get(u);
		});
	}
};

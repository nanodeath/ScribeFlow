// obviously this needs to be refactored so that we can put the mode defintions elsewhere
var SectionManager = new function(){
	var mode;
	this.getMode = function(){
		return mode;
	}
	this.setMode = function(newMode){
		// deactivate old mode
		switch(mode){
		case "add_section":
			$(".container_12").unbind("mouseenter mouseleave mousemove click");
			break;
		}
		
		$(document.body).removeClass("mode_" + mode);
		mode = newMode;
		$(document.body).addClass("mode_" + mode);
		console.log("mode %s activated", mode);
		
		// activate new mode
		switch(mode){
		case "add_section":
			$(".container_12").mouseenter(function(){
				$(this).mousemove({container: this}, track).click(function(){
					console.log("click");
				});
			});
			$(".container_12").mouseleave(function(){
				$(this).removeClass("new_slot_left").removeClass("new_slot_top").removeClass("new_slot_right").removeClass("new_slot_bottom").unbind("mousemove");
			});
			break;
		}
	};
	this.setMode("default");
};

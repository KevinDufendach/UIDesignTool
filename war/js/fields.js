(function(){
	// A generic field "class"
	function Field( options ) {
		
		this.id = options.id;
		this.type = options.type;
		this.label = options.label || "";
		this.note = options.note || "";
		this.value = options.value || "";
		this.options = {};
		
		switch (type) {
		case "radio":
			this.textValue = function() {
				return this.options[this.value];
			}
			this.widgetLink = "radio.html"; // need to make this faster so that the widget is cached
			break;
		case "text":
		case default:
			this.textValue = function() {
			return this.value;
		}
		break;
		}
		
		
	}
	
	// define a custom factory
	function FieldFactory() {}
	
	
	
	
	
	FieldFactory.prototype.createField = function (options) {
		
		this.id = options.id;
		this.type = options.type;
		this.label = options.label || "";
		this.note = options.note || "";
		this.value = options.value || "";
		this.options = {};
		
		switch(options.type) {
			case "radio":
				this.textValue = function() {
					return this.options[this.value];
				}
				this.widgetLink = radio.html;
				break;
			case "text":
			case default:
				this.textValue = function() {
					return this.value;
				}
				break;
		}
		
	}
	
})();
function Car(make, model, year, state, color){
	this.make = make;
	this.model = model;
	this.year = year; 
	this.color = color; 
	this.previous_owner = [];
	this.current_owner = "Manufacturer";
	this.state = "off";
	this.passengers = [];

	
}


Car.prototype.sale = function(newOwner){
	
	this.previous_owner.push(this.current_owner);
	this.current_owner = newOwner;
	
};

Car.prototype.paint = function(newColor){
	this.color = newColor;

};


Car.prototype.start = function() {
	if (this.state === "off") {
		this.state = "on";
	}
};

Car.prototype.off = function () {
	if (this.state === "on") {
		this.state = "off";
	}
};

Car.prototype.driveTo = function (destination) {
	if (this.state === "on")
	console.log("Driving to " + destination);
};

Car.prototype.park = function () {
	if (this.state === "off") {
		console.log("Parked!");
	}
};

Car.prototype.pick_up  = function (name) {
	if (this.state === "on") {
		console.log ("Driving to pick up " + name);
		this.passengers.push(name);
	}
};

Car.prototype.dropOff = function (name) {
	if (this.state === "on") {
		if (this.passengers.indexOf(name) !== -1) {
			console.log("Driving to pick up " + name);
			this.passengers.pop(name);
		}

	}
};	


module.exports = Car;


// this.state === 'off'
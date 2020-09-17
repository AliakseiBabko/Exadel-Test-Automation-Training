function MotorVehicle(name) {
    this.name = name;
    this.kind = 'motorVehicle';
}

MotorVehicle.prototype.drive = function() {
    console.log(this.name + ' is driving.');
}

function PassengerVehicle(name) {
    MotorVehicle.call(this, name);    
    this.kind = 'passengerVehicle';
    this.takePassengers = function() {
        console.log(this.name + ' is taking pasengers.');
    }
}

PassengerVehicle.prototype = Object.create(MotorVehicle.prototype);
PassengerVehicle.prototype.constructor = PassengerVehicle;

function Car(name, doors) {
    PassengerVehicle.call(this, name);
    this.doors = doors;
    this.kind = 'car';
    this.countDoors = function() {
        console.log(this.name + ' has ' + this.doors + ' doors.');
    }
}

Car.prototype = Object.create(PassengerVehicle.prototype);
Car.prototype.constructor = Car;

const myCar = new Car('Cory', 4);
myCar.countDoors();
myCar.takePassengers();
myCar.drive();
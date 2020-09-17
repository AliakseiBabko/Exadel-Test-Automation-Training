'use strict';

class MotorVehicle {
    constructor(name) {
        this.name = name;
        this.kind = 'motorVehicle';
    }
    getName() {
        console.log(this.name);
    }
    drive() {
        console.log(this.name + ' is driving.');
    }
}

class PassengerVehicle extends MotorVehicle {
    constructor(name) {
        super(name);
        this.kind = 'passengerVehicle';
    }
    takePassengers(){
        console.log(this.name + ' is taking pasengers.');
    }
}

class Car extends PassengerVehicle {
    constructor(name, doors) {
        super(name);
        this.doors = doors;
        this.kind = 'car';
    }
    countDoors() {
        console.log(this.name + ' has ' + this.doors + ' doors.');
    }
}

const myCar = new Car('Cory', 4);
myCar.countDoors();
myCar.takePassengers();
myCar.drive();
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || !Number.isFinite(this.distance) || this.distance < 0) {
            throw new Error("Distance must be a valid non-negative number.");
        }

        return this.distance * 10;
    }
}

const driver = new Driver("Rahul", 4.8, "Car");
console.log("Driver:", driver.name, "| Vehicle:", driver.vehicle);

try {
    const trip1 = new Trip("Mathura", "Agra", 60);
    console.log("Total Fare:", trip1.calculateFare());

    const trip2 = new Trip("Delhi", "Noida", -5);
    console.log("Total Fare:", trip2.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}

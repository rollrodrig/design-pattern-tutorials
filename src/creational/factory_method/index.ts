// @ts-nocheck
interface Transport {
    // All transports should build the deliver functionality
    deliver()
}
class TruckTransport implements Transport {
    // But each transport delivery the package in its own way
    // This deliver the package by road
    deliver() {
        return ">> execute delivery by land in a box"
    }
}
class ShipTransport implements Transport {
    // This deliver the package by sea
    deliver() {
        return ">> execute delivery by sea in a container"
    }
}

abstract class Logistic {
    // All logistic must have the same pattern
    abstract createTransport()
}
export class RoadLogistic extends Logistic {
    public transport
    public createTransport() {
        // The truck is the responsable of the delivery by road
        return new TruckTransport()
    }
}
export class SeaLogistic extends Logistic {
    public transport
    public createTransport() {
        // The ship is the responsable of the delivery by sea
        return new ShipTransport()
    }
}

// This my logistic application
export default class LogisticApp {
    deliveryBy
    deliver() {
        let logistic
        if (this.deliveryBy === "road") {
            logistic = new RoadLogistic()
        }
        if (this.deliveryBy === "sea"){
            logistic = new SeaLogistic()
        }
        const transport = logistic.createTransport()
        return transport.deliver()
    }
}
/**
    run this example in the terminal
    npm run test:factory-method

    or run the test version
    npm run  test:factory-method:test
 */

// My logistic application
const logisticApp = new LogisticApp()

// After some complex analysis this delivery should be made by road in a truck
logisticApp.deliveryBy = "road"
const result = logisticApp.deliver()
console.log(result)

class Building {
    constructor(sqft) {
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    evacuationWarningMessage() {
        throw new Error("Class extending Building must override evacuationWarningMessage");
    }
}

// Example of a class that extends Building
class OfficeBuilding extends Building {
    constructor(sqft, numFloors) {
        super(sqft);
        this._numFloors = numFloors;
    }

    get numFloors() {
        return this._numFloors;
    }

    evacuationWarningMessage() {
        return `Evacuate the office building with ${this._numFloors} floors immediately.`;
    }
}

// Example of a class that extends Building without implementing evacuationWarningMessage
class ResidentialBuilding extends Building {
    constructor(sqft, numApartments) {
        super(sqft);
        this._numApartments = numApartments;
    }
}

// Trying to create an instance of ResidentialBuilding will throw an error
try {
    const residentialBuilding = new ResidentialBuilding(10000, 50);
    console.log(residentialBuilding);
} catch (error) {
    console.error(`Error: ${error.message}`);
}


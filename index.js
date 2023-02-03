// Code your solution in this file!

function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
    return 264 * Math.abs(street - 42);
}

function distanceTravelledInFeet(start, fin) {
    return 264 * Math.abs(fin - start);
}

function calculatesFarePrice(start, destination) {
    let feet = 264 * Math.abs(destination - start);
    let charge;
    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <= 2000) {
        return 0.02 * Math.floor(Math.abs(400 - feet));
    } else if (feet > 2000 && feet <= 2500) {
        return 25;
    } else if (feet > 2500) {
        return 'cannot travel that far';
    }


}
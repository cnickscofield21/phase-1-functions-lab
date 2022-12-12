const feetPerBlock = 264;

function distanceFromHqInBlocks(streetNum = 0) {
    const hq = 42;

    return Math.abs(streetNum - hq);
}

function distanceFromHqInFeet(streetNum = 0) {
    return (distanceFromHqInBlocks(streetNum) * feetPerBlock);
}

function distanceTravelledInFeet(streetNum1 = 0, streetNum2 = 0) {
    const blocksTraveled = Math.abs(streetNum1 - streetNum2);

    return (blocksTraveled * feetPerBlock);
}

function calculatesFarePrice(start = 0, destination = 0) {
    const distInFeet = distanceTravelledInFeet(start, destination);

    if (distInFeet < 401) {
        return 0;
    } else if (distInFeet < 2001) {
        return ((distInFeet - 400) * .02);
    } else if (distInFeet < 2501) {
        return 25;
    } else if (distInFeet > 2500) {
        return 'cannot travel that far';
    }

}

//   it('gives customers a free sample', function() {
//     expect(calculatesFarePrice(43, 44)).to.equal(0);
//   });

//   it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//     // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//     expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//   });

//   it('charges 25 dollars for a distance over 2000 feet', function() {
//     expect(calculatesFarePrice(50, 58)).to.equal(25);
//   });

//   it('does not allow rides over 2500 feet', function() {
//     expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//   });

// console.log(43, distanceFromHqInFeet(distanceFromHqInBlocks(43)));
// console.log(50, distanceFromHqInFeet(distanceFromHqInBlocks(50)));
// console.log(34, distanceFromHqInFeet(distanceFromHqInBlocks(34)));
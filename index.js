// Write your solution in this file!
const driver = {
    name: 'Sam'
};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver;
}

const drivers = updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');
console.log(drivers.address);

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value){
    obj[key] = value;
    return obj;
}

const destructivelyUpdatedDriver = destructivelyUpdateDriverWithKeyAndValue(driver, 'address', '12 Broadway');
console.log(destructivelyUpdatedDriver);

function deleteFromDriverByKey(driver, key) {
    const newdriver = Object.assign({}, driver);
    delete newdriver[key];
    return newdriver;
}
let newdriver = deleteFromDriverByKey(driver, 'name');

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}
let newDriver = destructivelyDeleteFromDriverByKey(driver, 'name');

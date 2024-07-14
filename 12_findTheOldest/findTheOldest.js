const findTheOldest = function(people) {
    const ages = people.map((person) => {return getAgeAtDeath(person)});
    const sortedAges = ages.sort((age1, age2) => {return age1 > age2 ? 1 : -1;});
    const oldestAge = ages[ages.length - 1];
    return people.find((person) => {return getAgeAtDeath(person) === oldestAge});
};

function getAgeAtDeath(person) {
    if (!person.yearOfDeath) return new Date().getFullYear() - person.yearOfBirth;
    else return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;

module.exports = {
    /**
     * Filter the list of inventors for those who were born in the 1500s
     * @param inventors <Array>
     * @returns <Array>
     */
    inventorsBornIn1500s(inventors) {
        return inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
    },

    /**
     * Return a list with each inventor's first and last name, i.e. [John Smith]
     * @param inventors <Array>
     * @returns <Array>
     */
    inventorsFirstAndLastNames(inventors) {
        return inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    },

    /**
     * Sort the inventors by birth year, oldest to youngest
     * @param inventors <Array>
     * @returns <Array>
     */
    inventorsSortedByBirthYearOldestToYoungest(inventors) {
        return inventors.sort((prev, curr) => prev.year - curr.year);
    },

    /**
     * How many years did all the inventors live?
     * @param inventors <Array>
     * @returns <Array>
     */
    inventorsTotalYearsLived(inventors) {
        return inventors.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.passed - currentValue.year);
        }, 0);
    },

    /**
     * Sort the inventors by years lived
     * @param inventors <Array>
     * @returns <Array>
     */
    inventorsSortedByYearsLived(inventors) {
        return inventors.sort((prev, curr) => (prev.passed - prev.year) - (curr.passed - curr.year));
    },

    /**
     * Sort the inventors by last name
     * @param inventors <Array>
     * @returns <Array>
     */
    inventorsSortedByLastName(inventors) {
        return inventors.sort((prev, curr) => {
            return (prev.last < curr.last)
                ? -1
                : (prev.last > curr.last)
                    ? 1
                    : 0
        });
    },

    /**
     * Sort the people by last name
     * @param inventors <Array>
     * @returns <Array>
     */
    peopleSortedByLastName(people) {
        return people.sort((prev, curr) => {
            let getLastName = (name) => {
                return name.split(',')[0].trim().toLowerCase();
            }
            return (getLastName(prev) < getLastName(curr))
                ? -1
                : (prev > curr)
                    ? 1
                    : 0
        });
    },

    /**
     * Sum up the instances of all of these transportation
     * const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
     * @param inventors <Array>
     * @returns <Array>
     */
    sumUpInstancesOfTransportation(data) {
        return data.reduce((numberOfInstanceObject, currentObj) => {
            if (!numberOfInstanceObject.hasOwnProperty(currentObj)) {
                numberOfInstanceObject[currentObj] = 0;
            }
            numberOfInstanceObject[currentObj] += 1;
            return numberOfInstanceObject;
        }, {})
    }
}



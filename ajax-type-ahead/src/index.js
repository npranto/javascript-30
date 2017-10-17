let fetchAllCities = () => {
    const ENDPOINT = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    return fetch(ENDPOINT)
        .then((blob) => blob.json());
}

let filterByCityName = (cityOrState, cities) => {
    return cities.filter(place => {
        const regex = new RegExp(cityOrState, 'gi');    // will look for 'cityOrState' name globally, with case insensitive flag
        return (place.city.match(regex) || place.state.match(regex));
    });
}

let formatWithCommas = (population) => {
    return population
        .toString()
        .split('')
        .reverse()
        .reduce((accum, digit) => {
            if (accum.counter === 0) {
                accum.formatted = ',' + accum.formatted;
                accum.counter = 3;
            }
            accum.formatted = digit + accum.formatted;
            accum.counter--;
            return accum;
        }, {
            formatted: '',
            counter: 3
        }).formatted;
}

let display = (listOfCitiesElem, citiesFiltered, cityNameTypedSoFar) => {
    let filteredCitiesToHTML = citiesFiltered.map((place) => {
        let regex = new RegExp(cityNameTypedSoFar, 'gi');
        let cityNameHighlighted = place.city.replace(regex, `<span class="greenlighted">${place.city.match(regex) ? place.city.match(regex).join('') : ''}</span>`)
        return `
                    <li class="city">
                        <p class="name"> ${cityNameHighlighted} </p>
                        <p class="population"> ${formatWithCommas(place.population)} </p>
                    </li>
                `
    })
    listOfCitiesElem.innerHTML = filteredCitiesToHTML.join('\n');
}

let run = () => {
    fetchAllCities()
        .then(cities => {

            let cityField = document.querySelector('.container form .city-field');
            let listOfCitiesElem = document.querySelector('.container .list-of-cities');

            cityField.addEventListener('keyup', () => {
                let citiesFiltered = filterByCityName(cityField.value, cities);
                display(listOfCitiesElem, citiesFiltered, cityField.value);
            })

        });
}


//////////
run();



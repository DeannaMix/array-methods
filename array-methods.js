const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(gasball => {
    planetEl.innerHTML += `
    <h1>${gasball}</h1>
    `
})




/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const upperGasballs = planets.map(gasball => {
    return capitalizeFirstLetter(gasball)
})
console.log(upperGasballs)


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const gasballsWithE = planets.filter(gasball => {
    if (gasball.includes('e')) {
        return true
    } else {
        return false
    }
})

console.log(gasballsWithE)
console.log("I like chicken nugget")
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// fetch request
fetch("https://api.openbrewerydb.org/breweries")
.then(r => r.json())
.then(data => console.log(data))

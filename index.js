//const EMPTY_HEART = '♡'
//const FULL_HEART = '♥'


function fetchRandom(){
fetch ("https://api.openbrewerydb.org/breweries")
    .then(r => r.json())
    .then(data => renderBreweries(data))
}
fetchRandom();

function renderBreweries(breweries){
    breweries.map(brewery => {
        //console.log(brewery.name)
        const breweryBar = document.querySelector(".brewery_bar")
        const breweryCard = document.createElement("div")
        breweryBar.append(breweryCard)
        const breweryName = document.createElement("h3")
        breweryName.textContent = brewery.name
        breweryCard.append(breweryName)

    })
}
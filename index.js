//const EMPTY_HEART = '♡'
//const FULL_HEART = '♥'


function fetchBreweries(){
fetch ("https://api.openbrewerydb.org/breweries")
    .then(r => r.json())
    .then(data => renderBreweries(data))
}
//fetchBreweries();

function renderBreweries(breweries){
    breweries.map(brewery => {
        //console.log(brewery.name)
        const breweryBar = document.querySelector(".brewery_bar")
        const breweryCard = document.createElement("div")
        breweryBar.append(breweryCard)
        const breweryName = document.createElement("h3")
        const breweryAddress = document.createElement('p')
        const street = brewery.street
        breweryName.textContent = brewery.name
        breweryCard.append(breweryName)
        breweryAddress.textContent = brewery.street
        breweryCard.appendChild(breweryAddress)

    })
}

const swiper = new Swiper(".slide_content", {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
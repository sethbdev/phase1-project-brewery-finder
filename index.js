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
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
  });
/*
                        <div class="card swiper-slide">
                            <div class="image_content">
                                <span class="overlay"></span>

                                <div class="card_image">
                                    <img src="./pictures/bar 1.jpeg" alt="bar" class="card_image">
                                </div>
                            </div>

                            <div class="card_content">
                                <h2 class="name">NAME</h2>
                            </div>
                        </div>

      function renderBreweries(breweries){
    breweries.map(brewery => {
        //console.log(brewery.name)
        const breweryBar = document.querySelector(".brewery_bar")
        const div = document.createElement("div")
        div.className = "card swiper-slide"
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
*/
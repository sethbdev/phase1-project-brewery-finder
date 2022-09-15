//const EMPTY_HEART = '♡'
//const FULL_HEART = '♥'


function fetchBreweries(){
fetch ("https://api.openbrewerydb.org/breweries")
    .then(r => r.json())
    .then(data => {
       // renderBreweries(data)
        renderCarouselCards(data)
    })
}
fetchBreweries();

const swiper = new Swiper(".slide_content", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 3,
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

  const divInsert = document.querySelector("#divInsert");
  function renderCarouselCards(breweries) {
      breweries.forEach((brewery) => {
          // brewery.likes = 0
          // const btn = document.querySelector("#like_button")
          const cardSwiperSlide = document.createElement("div")
          cardSwiperSlide.className = "card swiper-slide"
          const imageContent = document.createElement("div")
          imageContent.className = "image_content"
          const overlay = document.createElement("span")
          overlay.className = "overlay"
          const cardImage = document.createElement("div")
          cardImage.className = "card_image"
          const imageTag = document.createElement("img")
          imageTag.className = "card_image"
          imageTag.src = "./pictures/bar 2.jpeg"
          const cardContent = document.createElement("div")
          cardContent.className = "card_content"
          const name = document.createElement("h2")
          name.className = "name"
          name.textContent = brewery.name
          cardContent.append(name)
          cardImage.append(imageTag)
          imageContent.append(overlay, cardImage)
          cardSwiperSlide.append(imageContent, cardContent)
          divInsert.append(cardSwiperSlide)
          

          imageTag.addEventListener("click", () => {
            console.log(brewery.likes)
            const container = document.querySelector("#link")
            const barTitleName = document.querySelector("#bar_name")
              barTitleName.textContent = brewery.name
            const stateTitle = document.querySelector("#state_location")
              stateTitle.textContent = brewery.state
            const cityTitle = document.querySelector("#city_location")
              cityTitle.textContent = brewery.city
            const addressTitle = document.querySelector("#street")
              addressTitle.textContent = brewery.street
            const numberTitle = document.querySelector("#phone_number")
              numberTitle.textContent = brewery.phone
            // const webUrl = document.querySelector(".bar_link") 
              // if (brewery.website_url != null) {  
              // webUrl.href = brewery.website_url
              // } else if (brewery.website_url === null){
              //   webUrl.style.display = "none"
              // }
            while(container.firstChild) {
                container.removeChild(container.lastChild)
              }
            if(brewery.website_url != null){
                const testLink = document.createElement("a")
              testLink.href = brewery.website_url
              testLink.textContent = "link"
              container.append(testLink)
              console.log(container)
              }

          }) 
          
      })
  
  }

function hiddenButtonBuilder(){
    const divSelect = document.querySelector("#bar_image")
    const btn = document.createElement("button")
    divSelect.appendChild(btn)

    btn.addEventListener("click", () => {
        joke();
    })

}
hiddenButtonBuilder();

async function joke() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Misc,Programming?format=json&safe-mode&type=single");
    const jokeReturn = await response.json();
    const punchline = jokeReturn["joke"]
    alert(punchline)
  }

  // function btn () {
  //   const btn = document.querySelector("#like_button") 
  //   btn.addEventListener("click", (e) => {
  //     const newLikes = e.target["brewery_likes"].value
  //     btn.textContent = parseInt(newLikes) + parseInt(btn.textContent) + " likes"   
  //   })
  // }

// fetch("http://localhost:3000/breweryLikes")
//   .then(r => r.json())
//   .then(data => {
//     likeBtn(data)})

// function likeBtn(breweryLikes){
//   let loveMe;
//   btn.addEventListener("click", () => { 
//     const btn = document.querySelector("#like_button")
//     btn.textContent = breweryLikes.likes  
//     loveMe.likes = loveMe.likes + 1;
//     btn.textContent = loveMe.likes + " Love Me!"
//   })
// }

/* async function joke() {
    return fetch("https://v2.jokeapi.dev/joke/Misc,Programming?format=json&safe-mode&type=single")
        .then(r => r.json())
        .then(data => alert(data))
}
*/


/*function renderBreweries(breweries){
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
*/

/* need to build a function that loops through the brewery obj,
        for (let i = 0; i < breweries.length; i += 1)
    uses const sendNamesToH2Divs = document.getElementById(`${"[i]"}`);
    increments plus 1 for each item in in breweries.map,
    each time is runs through: sendNamesToH2Divs.textContent = brewery.name
            This is to append each name to each card on the slider

*/

                        /*<div class="card swiper-slide">
                            <div class="image_content">
                                <span class="overlay"></span>

                                <div class="card_image">
                                    <img src="./pictures/bar 1.jpeg" alt="bar" class="card_image">
                                </div>
                            </div>

                            <div class="card_content">
                                <h2 class="name" i>NAME</h2>
                            </div>
                        </div>

                        */



                        
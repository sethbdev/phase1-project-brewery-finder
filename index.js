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
        console.log(breweries)
        breweries.forEach((brewery) => {
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
  
            console.log(brewery.name)
    
            imageTag.addEventListener("click", () => {
              const barTitleName = document.querySelector("#bar_name")
                barTitleName.textContent = brewery.name
              const stateTitle = document.querySelector("#state_location")
                stateTitle.textContent = brewery.state
              const cityTitle = document.querySelector("#city_location")
                cityTitle.textContent = brewery.city
              const addressTitle = document.querySelector("#street")
                addressTitle.textContent = brewery.street
              const numberTitle = document.querySelector("#phone_number")
                numberTitle.textContent = brewery.phone.slice(0,3) + "-" + brewery.phone.slice(3,6) + "-" + brewery.phone.slice(6,10)
              
              const container = document.querySelector("#link")
              while(container.firstChild) {
                container.removeChild(container.lastChild)
              }
              if(brewery.website_url != null){
                const testLink = document.createElement("a")
                  testLink.href = brewery.website_url
                  testLink.textContent = "link"
                  container.append(testLink)
              }
              
            })
            
        })
    
    }
  
  function hiddenButtonBuilder(){
      const divSelect = document.querySelector("#bar_image")
      const btn = document.createElement("button")
      btn.innerHTML = "Submit";
      //btn.type = "submit";
      //btn.name = "formBtn";
      divSelect.appendChild(btn)
      btn.id = "jokeBtn"
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
  
    // Light Mode function

    function lightButton(){
      const divSelectBtn = document.querySelector("#viewModeBtn")
      const btn = document.createElement("button")
      btn.innerHTML = "Light Mode -";
      btn.type = "submit";
      btn.name = "formBtn";
      btn.className = "viewMode"
      divSelectBtn.appendChild(btn)
      
      
      btn.addEventListener("click", renderLight)
  
  }
  lightButton();

  //Dark Mode function
  
  function darkButton(){
    const divSelectBtn = document.querySelector("#viewModeBtn")
    const btn = document.createElement("button")
    btn.innerHTML = "- Dark Mode";
    btn.type = "submit";
    btn.name = "formBtn";
    btn.className = "viewMode"
    divSelectBtn.appendChild(btn)
    
    
    btn.addEventListener("click", renderDark)

}
darkButton();


  
  function renderLight() {
      const headerColor = document.getElementById("header")
      headerColor.style.background = "#FFF"
     // const bodyColor = document.getElementById("body")
      //bodyColor.style.backgroundColor = "#FFF"
  } 
      

  function renderDark() {
      const headerColor = document.getElementById("header")
      headerColor.style.background = "#100d06"   
  }
     
      
  
      
  
  
  
  
  
  
  
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
  
  
  /*
                          
  
  
  /*function renderBreweryNames(breweries){
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
  
  
  
                          
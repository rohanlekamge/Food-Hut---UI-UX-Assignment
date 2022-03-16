// Navbar toggle button
function myFunction() 
{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var foodArray = [
	{
		"foodId": 1,
		"foodTitle": "Home made sweet beef burger",
		"foodDescription": "Cooked by Nishan's family",
		"foodRatings": 4,
		"foodPrice": 350,
		"imgUrl": "assets/img/Home/Trending Picks/Burger-img.png"
	},
	{
		"foodId": 2,
		"foodTitle": "Crispy chicken leg piece bucket",
		"foodDescription": "Cooked by Nishan's family",
		"foodRatings": 4,
		"foodPrice": 1100,
		"imgUrl": "assets/img/Home/Trending Picks/Chciken-Bucket-Img.png"
	},
	{
		"foodId": 3,
		"foodTitle": "Home made orange juice pack",
		"foodDescription": "Cooked by Nishan's family",
		"foodRatings": 4,
		"foodPrice": 130,
		"imgUrl": "assets/img/Home/Trending Picks/Orange-Juice-Img.png"	
	},
  {
		"foodId": 4,
		"foodTitle": "Soft sausage bun",
		"foodDescription": "Cooked by Nishan's family",
		"foodRatings": 4,
		"foodPrice": 120,
		"imgUrl": "assets/img/Home/Trending Picks/Sausage-Bun-Img.png"	
	},
  {
		"foodId": 5,
		"foodTitle": "Cheese chicken bacon burger",
		"foodDescription": "Cooked by Nishan's family",
		"foodRatings": 4,
		"foodPrice": 600,
		"imgUrl": "assets/img/Home/Trending Picks/Cheese-Bacon-Burger-Img.png"	
	}
]


var oddEven = ''
function link(intValue){
  document.getElementById("trending-picks").innerHTML = "";
  document.getElementById("trending-picks-2").innerHTML = "";
  oddEven = intValue;
  buidCard()
}


// Displaying home cards
buidCard();
function buidCard() 
{  
  var cards = document.getElementById("trending-picks");
  var cardsRight = document.getElementById("trending-picks-2");
  fetch('./data.json')
  .then( function (response)
  {
    return response.json();
  })
  .then( function (data) {



    if (oddEven==1 ){
      console.log(oddEven);
      data.sort(function(a,b){return a.foodPrice-b.foodPrice});
      // $('#login-validation-modal').modal('show');
    } else if (oddEven==2) {
      data.sort(function(a,b){return b.foodPrice-a.foodPrice});
    } else if (oddEven==3) {
      data.sort(function(a,b){return a.foodRatings-b.foodRatings});
    } else if (oddEven==4) {
      data.sort(function(a,b){return b.foodRatings-a.foodRatings});
    }


    // JS Script to display Ipad Landscsape Tile view
    for (let i = 0; i < data.length; i++) {
      if(i%2==0){
      var card = 
      `<div class="row food-card">
  
          <div class="col-4 my-auto">
            <img class="mx-auto d-block card-img" src="${data[i].imgUrl}" alt="">
          </div>
  
          <div class="col-7 food-details">
          
            <p id="food-title">
              <a href="stu01_food_details.html?id=${data[i].foodId}">${data[i].foodTitle}</a>
            </p>
  
            <p id="food-description">${data[i].foodDescription}</p>
  
            <p id="food-ratings">
                <svg xmlns="http://www.w3.org/2000/svg" width="14.361" height="13.657" viewBox="0 0 14.361 13.657">
                    <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                </svg>
  
                <svg xmlns="http://www.w3.org/2000/svg" width="14.361" height="13.657" viewBox="0 0 14.361 13.657">
                    <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                </svg>
  
                <svg xmlns="http://www.w3.org/2000/svg" width="14.361" height="13.657" viewBox="0 0 14.361 13.657">
                    <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                </svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="14.361" height="13.657" viewBox="0 0 14.361 13.657">
                    <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                </svg>
            </p>
            <p id="food-price">Rs.${data[i].foodPrice}.00</p>
          </div>
  
          <div class="col-1">
            <input class="heart fa fa-heart-o" type="checkbox" name="LetterNeed" id="LetterNeed" onchange="validate(${data[i].foodId})"></span>
          </div>
  
      </div>`
      cards.innerHTML += card
      } 
      else {
        var cardRight = 
        `<div class="row food-card-2">
    
            <div class="col-4 my-auto">
              <img class="mx-auto d-block card-img" src="${data[i].imgUrl}" alt="">
            </div>
    
            <div class="col-7 food-details-2">
            
              <p id="food-title-2">
                <a href="stu01_food_details.html?id=${data[i].foodId}">${data[i].foodTitle}</a>
              </p>
    
              <p id="food-description">${data[i].foodDescription}</p>
    
              <p id="food-ratings-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.361" height="13.657" viewBox="0 0 14.361 13.657">
                      <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                  </svg>
    
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.361" height="13.657" viewBox="0 0 14.361 13.657">
                      <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                  </svg>
    
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.361" height="13.657" viewBox="0 0 14.361 13.657">
                      <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                  </svg>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.361" height="13.657" viewBox="0 0 14.361 13.657">
                      <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                  </svg>
              </p>
              <p id="food-price-2">Rs.${data[i].foodPrice}.00</p>
            </div>
    
            <div class="col-1">
              <input class="heart fa fa-heart-o" type="checkbox" name="LetterNeed" id="LetterNeed" onchange="validate(${data[i].foodId})"></span>
            </div>
    
        </div>`
        cardsRight.innerHTML += cardRight
      }
    }
  })
  
}


// Getting favourite Id from checkbox
const favFoods = [];

function validate(foodId) {  

    if (document.getElementById('LetterNeed').checked) 
    {
        if (favFoods.includes(foodId))
        {
          //alert('Already added');
        }
        else
        {
          $('#favourite-add-validation-modal').modal('show');
          // alert("Added to favourites" + foodId);
          favFoods.push(foodId);
          console.log(favFoods);
          localStorage.setItem("favFoods", JSON.stringify(favFoods));
        } 
    } 
    else 
    {
      $('#favourite-remove-validation-modal').modal('show');
        for (let i = 0; i < favFoods.length; i++) 
        {
          if(foodId == favFoods[i])
          {
            // var getLSCityName = localStorage.getItem('favFoods');
            // getLSCityName.splice(foodId,i);
          }
        }
    }
}

$(".heart.fa").click(function() {
  $(this).toggleClass("fa-heart fa-heart-o");
});















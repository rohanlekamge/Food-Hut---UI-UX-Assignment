// Navbar toggle button
function myFunction2() 
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
		"foodPrice": "Rs. 350.00",
		"imgUrl": "assets/img/Home/Trending Picks/Burger-img.png"
	},
	{
		"foodId": 2,
		"foodTitle": "Crispy chicken leg piece bucket",
		"foodDescription": "Cooked by Nishan's family",
		"foodRatings": 4,
		"foodPrice": "Rs. 1100.00",
		"imgUrl": "assets/img/Home/Trending Picks/Chciken-Bucket-Img.png"
	},
	{
		"foodId": 3,
		"foodTitle": "Home made orange juice pack",
		"foodDescription": "Cooked by Nishan's family",
		"foodRatings": 4,
		"foodPrice": "Rs. 130.00",
		"imgUrl": "assets/img/Home/Trending Picks/Orange-Juice-Img.png"	
	},
    {
		"foodId": 4,
		"foodTitle": "Soft sausage bun",
		"foodDescription": "Cooked by Nishan's family",
		"foodRatings": 4,
		"foodPrice": "Rs. 120.00",
		"imgUrl": "assets/img/Home/Trending Picks/Sausage-Bun-Img.png"	
	},
    {
		"foodId": 5,
		"foodTitle": "Cheese chicken bacon burger",
		"foodDescription": "Cooked by Nishan's family",
		"foodRatings": 4,
		"foodPrice": "Rs. 600.00",
		"imgUrl": "assets/img/Home/Trending Picks/Cheese-Bacon-Burger-Img.png"	
	}
]


// Displaying home cards
buidCards(foodArray);

function buidCards(data) 
{  
    var cards = document.getElementById("favourites");
    var retrievedData = localStorage.getItem("favFoods");
    var alreadyFavs = JSON.parse(retrievedData);

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < alreadyFavs.length; j++)
        {
            if ( data[i].foodId == alreadyFavs[j] ) 
            {
                var card = 
                `<div class="row food-card">

                    <div class="col-4 my-auto">
                        <img class="mx-auto d-block card-img" src="${data[i].imgUrl}" alt="">
                    </div>

                    <div class="col-8 food-details">
                        <p id="food-title">${data[i].foodTitle}</p>
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
                        <p id="food-price">${data[i].foodPrice}</p>
                    </div>

                </div>`
                cards.innerHTML += card
            }
        }
    }
}


const itemNames = [];
function sendEmails(recieverEmail)
{
    sendEmail(foodArray, recieverEmail);
}
function sendEmail(data, recieverEmail) 
{   
    var retrievedData = localStorage.getItem("favFoods");
    var alreadyFavs = JSON.parse(retrievedData);
    alert(alreadyFavs);

    for (let i = 0; i < data.length; i++) 
    {
        for (let j = 0; j < alreadyFavs.length; j++) 
        {
            if (data[i].foodId == alreadyFavs[j]) 
            {
                itemNames.push(data[i].foodTitle + ' ');
            }   
        }   
    }
    alert(itemNames);
    alert(recieverEmail);

    Email.send
    ({
        Host : "smtp.gmail.com",
        Username : "slcollagearts.vp",
        Password : "Pereravihan9",
        To : recieverEmail,
        From : "slcollagearts.vp@gmai.com",
        Subject : "This is the subject",
        Body : itemNames
    }).
    then(
      message => alert(message)
    );    
}

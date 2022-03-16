// URL Parameter fetching
function getParameter( patameterName )
{   
    let parameters = new URLSearchParams( window.location.search );
    return parameters.get( patameterName );
}
var passedId = getParameter("id");
console.log(passedId);


// Desplaying POI details
buidCards();
function buidCards() 
{
    var cards = document.getElementById("single-detail");
    fetch('./data-updated.json')
    .then( function (response)
    {
        return response.json();
    })
    .then( function (data) 
    {
        for (let i = 0; i < data.length; i++) 
        {
            if ( passedId == data[i].foodId ) 
            {
                var card = 
                `
                <div class="container">
                    <div class="details-section">
    
                        <!-- Main img -->
                        <img class="main-img mx-auto d-block" 
                            src="${data[i].detailedUrl}" alt="">
    
                        <!-- Item details -->
                        <div class="container">
                            <div class="row">
    
                                <!-- Item name -->
                                <div class="col-12">
                                    <h5 id="details-food-title">${data[i].foodTitle}</h5>
                                </div>
                                
                                <!-- Lengthy description -->
                                <div class="col-12">
                                    <p id="details-food-description">
                                        ${data[i].lengthyDescription}
                                    </p>
                                </div>
    
                                <!-- Current reviews -->
                                <p id="details-food-ratings">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 14.361 13.657">
                                        <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                                    </svg>
                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 14.361 13.657">
                                        <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                                    </svg>
                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 14.361 13.657">
                                        <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                                    </svg>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 14.361 13.657">
                                        <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                                    </svg>
    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 22.634 21.525">
                                        <path id="Icon_feather-star" data-name="Icon feather-star" d="M14.317,3l3.5,7.084,7.82,1.143-5.658,5.511,1.335,7.786-6.994-3.678L7.323,24.525l1.335-7.786L3,11.227l7.82-1.143Z" transform="translate(-3 -3)" fill="#bebebe"/>
                                    </svg>
                                </p>
    
                                <!-- Custom devider -->
                                <span id="details-devider"><hr></span>
    
                                <!-- Pizza size -->
                                <div class="col-12">
                                    <h5 id="details-food-size-title">Select size</h5>
                                </div>
    
                                <!-- Radio button 01 -->
                                <div class="col-1 pricing-radio-btns">
                                    <input data-role="none" type="radio" id="small" name="small_check" value="small">
                                </div>
                                <div class="col-5 pricing-label-names">
                                    <label data-role="none" for="small"><p>Small</p></label>
                                </div>
                                <div class="col-6 pricing-options">${data[i].foodSmallPrice}</div>
    
                                <!-- Radio button 02 -->
                                <div class="col-1 pricing-radio-btns">
                                    <input data-role="none" type="radio" id="medium" name="fav_language" value="medium">
                                </div>
                                <div class="col-5 pricing-label-names">
                                    <label data-role="none" for="medium"><p>Medium</p></label>
                                </div>
                                <div class="col-6 pricing-options">${data[i].foodMediumPrice}</div>
    
                                <!-- Radio button 03 -->
                                <div class="col-1 pricing-radio-btns">
                                    <input data-role="none" type="radio" id="large" name="fav_language" value="large">
                                </div>
                                <div class="col-5 pricing-label-names">
                                    <label data-role="none" for=large"><p>Large</p></label>
                                </div>
                                <div class="col-6 pricing-options">${data[i].foodLargePrice}</div>
    
                                <!-- Custom devider -->
                                <span id="details-devider"><hr></span>
                                
                                <!-- Item counter -->
                                <div class="col-6 my-auto">
                                    <h5 id="details-food-qty-title">Pizza items</h5>
                                </div>
                                <div class="col-6 details-item-counter">
                                    <button data-role="none" id="minus-btn" onclick="decrement()"><p>-</p></button>
                                    <input data-role="none" id=itemNubmer type=number value=1 min=1 max=50>
                                    <button data-role="none" id="plus-btn" onclick="increment()"><p>+</p></button>
                                </div>
    
                                <!-- Custom devider -->
                                <span id="details-devider"><hr></span>
                                
                                <!-- Full amount -->
                                <div class="col-6 my-auto">
                                    <h5 id="details-full-amount-title">Full amount</h5>
                                </div>
                                <div class="col-6 my-auto">
                                    <p id="details-full-amount">
                                        ${data[i].foodSmallPrice}
                                    </p>
                                </div>
    
                                <!-- Custom devider -->
                                <span id="bottom-space"></span>
    
                                <!-- Add to cart button -->
                                <center>
                                <a data-role="none" class="btn add-to-cart-btn" href="#your-items-screen" onclick="addToBasket(${data[i].foodId}, ${data[i].foodSmallPrice}, ${data[i].foodMediumPrice}, ${data[i].foodLargePrice})"><p>Add to basket</p></a>
                                </center>

                            </div>
                        </div>
    
                    </div>
                    
                </div>
                `
                cards.innerHTML += card
            }
        }
    })
}


// Quantity counter logic - in food-details page
function increment() {
    document.getElementById('itemNubmer').stepUp();
}
function decrement() {
    document.getElementById('itemNubmer').stepDown();
}


function addToBasket(foodId, smallPortionPrice, mediumPortionPrice, largePortionPrice) {

    var keyValue = 20;
    var constValue = localStorage.getItem("gamificationValue");;
    constValue = parseInt(constValue)  + parseInt(keyValue);
    localStorage.setItem("gamificationValue", constValue);

    $('#foodDetail-validation-modal').modal('show');

    var portianPrice = " ";
    if(document.getElementById('small').checked)
    {
        portianPrice = smallPortionPrice;
    }
    else if(document.getElementById('medium').checked)
    {
        portianPrice = mediumPortionPrice;
    }
    else if(document.getElementById('large').checked)
    {
        portianPrice = largePortionPrice;
    }
    
    // var favorites = [{foodId: 1, itemQty: "1", portionPrice: 500}];
    var favorites = [] ;
    var cartItems = 
    {
        "foodId": foodId,
        "itemQty": document.getElementById('itemNubmer').value,
        "portionPrice": portianPrice
    }
    
    favorites = JSON.parse(localStorage.getItem('cartItems'));
    console.log(favorites);

    console.log(Array.isArray(cartItems));
    favorites.push(cartItems);
    
    console.log(favorites);
    //console.log(favorites);
    localStorage.setItem("cartItems", JSON.stringify(favorites));
}
$('#submit').on('click', function() {
	var cookBookCategory = $('#cookBookCategory').val()
	//CookBook
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
		"method": "POST",
		"headers": {
			"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com",
			"x-rapidapi-key": "9d23a098c0mshffb86547dfcfa5ap17bf84jsn411163bf9f70",
			"content-type": "text/plain",
			"accept": "text/plain"
		},
		"data": "https://www.jamieoliver.com/recipes/" + cookBookCategory,
	}
	$.ajax(settings).done(function (response) {
		console.log(response);
		let responseLength = response[0].ingredients.length;
		let responseList = response[0].ingredients;
		let responseTopics = response[0].instructions[0].steps
		let responseImg = response[0].images[0]
		console.log(responseLength)
		for (var i = 0; i < responseLength; i++){
			responseTopics[i]
			console.log(responseTopics[i])
			$('#topic').html(responseTopics[i])
			responseList[i]
			console.log(responseList[i])	
			$('#list').html(responseList[i])
			responseImg
			console.log(responseImg)
			$('#img').attr('href', responseImg)
		}
	});
	//Cocktails
	var cocktailCategory = $('#cocktailCategory').val()
	var ingredientCategory = $('#ingredientCategory').val()
	if (cocktailCategory == null){
		$.ajax({
			url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingredientCategory,
			method: "GET"
		}).then(function(ingredientresponse){
			console.log(ingredientresponse)})
	} else if (ingredientCategory == null) {
		$.ajax({
			url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailCategory,
			method: "GET"
		}).then(function(cocktailresponse){
			console.log(cocktailresponse)})
	} else {
		$.ajax({
			url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
			method: "GET"
		}).then(function(randomresponse){
			console.log(randomresponse)})
	}
	//Resturants
	//
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&prices_restaurants=10953%252C10955&restaurant_mealtype=10598%252C10599&currency=USD&lang=en_US&location_id=293919",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
			"x-rapidapi-key": "9d23a098c0mshffb86547dfcfa5ap17bf84jsn411163bf9f70"
		}
	}
	$.ajax(settings).done(function (resturantresponse) {
		console.log(resturantresponse);
	});
	})
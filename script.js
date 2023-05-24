const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '437a40ec38mshe8d2a6fe7995b8cp17743bjsn6ee51c92a86c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


fetch(url, options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
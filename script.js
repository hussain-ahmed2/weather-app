function fetchWeather(location = "Dhaka") {
    const apiKey = '9b66cc778523418802b6db7885a89cda';
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.success === false) {
                alert('Error: ' + data.error.info);
                return;
            }

            document.getElementById('weatherInfo').style.display = 'block';
            document.getElementById('city').innerText = `${data.location.name}, ${data.location.country}`;
            document.getElementById('temperature').innerText = `${data.current.temperature}°C`;
            document.getElementById('description').innerText = data.current.weather_descriptions[0];
            document.getElementById('wind').innerText = `Wind: ${data.current.wind_speed} km/h ${data.current.wind_dir}`;
            document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;
            document.getElementById('visibility').innerText = `Visibility: ${data.current.visibility} km`;
            document.getElementById('weatherIcon').src = data.current.weather_icons[0];
            document.body.style.backgroundImage = getBackgroundImage(data.current.weather_descriptions[0]);
        })
        .catch(error => {
            alert('Error fetching data');
            console.error(error);
        });
}

function getBackgroundImage(weatherDescription) {
    if (weatherDescription.toLowerCase().includes('sunny')) {
        return 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><circle cx=\'50%\' cy=\'50%\' r=\'200\' fill=\'yellow\' /></svg>")';
    } else if (weatherDescription.toLowerCase().includes('cloud')) {
        return 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><circle cx=\'50%\' cy=\'50%\' r=\'200\' fill=\'lightgray\' /></svg>")';
    } else if (weatherDescription.toLowerCase().includes('rain')) {
        return 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><rect width=\'100%\' height=\'100%\' fill=\'#0077be\' /></svg>")';
    } else if (weatherDescription.toLowerCase().includes('snow')) {
        return 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><rect width=\'100%\' height=\'100%\' fill=\'#ffffff\' /></svg>")';
    } else {
        return 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><rect width=\'100%\' height=\'100%\' fill=\'#87CEEB\' /></svg>")';
    }
}

function enterKey(event) {
    if (event.key === 'Enter') {
        fetchWeather(document.getElementById('location').value);
    }
}

// Fetch weather for the default location when the page loads
document.addEventListener('DOMContentLoaded', () => fetchWeather());

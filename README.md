# Weather App

A simple, mobile-responsive weather app that provides current weather information for a specified location. The app uses the Weatherstack API to fetch real-time weather data and displays it with relevant icons and a background that matches the weather condition (e.g., sunny, cloudy, rainy, snowy).

## Features

- Fetches and displays the current weather for a user-specified city.
- Shows details such as temperature, weather description, wind speed, humidity, and visibility.
- Automatically shows the weather for New York on page load.
- Responsive design for an optimized experience on mobile and desktop.
- Dynamic backgrounds that adjust based on weather conditions.

## Demo

![Weather App Screenshot](path/to/your/screenshot.png)

## Getting Started

### Prerequisites

- An API key from [Weatherstack](https://weatherstack.com/) to access weather data.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather-app
    ```
3. Replace the placeholder API key with your actual API key in `script.js`:
    ```javascript
    const apiKey = 'YOUR_API_KEY';
    ```

### Usage

1. Open `index.html` in a web browser.
2. Enter the name of a city in the input box and click "Get Weather" or press Enter.
3. View the current weather information for the entered location, including temperature, weather description, wind speed, humidity, and visibility.

### Folder Structure

```
.
├── index.html # Main HTML file 
├── style.css # CSS for styling and responsive design 
├── script.js # JavaScript for fetching and displaying weather data 
└── README.md # Project documentation
```

## API Reference

The app uses the [Weatherstack API](https://weatherstack.com/documentation) for weather data. The base URL for the API request is:

http://api.weatherstack.com/current?access_key=YOUR_API_KEY&query=LOCATION

- Replace `YOUR_API_KEY` with your actual Weatherstack API key.
- Replace `LOCATION` with the city name or coordinates for which you want to retrieve weather data.

## Customization

You can customize the app’s styling by modifying `style.css` and add more backgrounds for different weather conditions in `script.js` under the `getBackgroundImage` function.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add a feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See `LICENSE` for more information.

---

### Credits

- Weather data powered by [Weatherstack](https://weatherstack.com/).
- Icons provided by [Icons8](https://icons8.com/).
- Backgrounds generated using inline SVG.

Replace YOUR_API_KEY with your actual Weatherstack API key and https://github.com/your-username/weather-app.git with the actual repository link if it’s hosted on GitHub. You can also add any additional customization instructions or links to assets you may use in the app.

### Live Demo

Check out the live app [here](https://weather-app-by-hussain.netlify.app/).

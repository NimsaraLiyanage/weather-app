# Weather App

A simple and modern weather application built with React and styled-components. This app fetches and displays the current weather and a 5-day forecast for any city using the OpenWeatherMap API.

## Features

- Fetches and displays the current weather for a searched city
- Shows a 5-day weather forecast
- Displays temperature, humidity, and wind speed
- Modern and responsive design using styled-components

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up OpenWeatherMap API Key**:
    - Create a `.env` file in the root directory
    - Add your OpenWeatherMap API key to the `.env` file:
        ```
        REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
        ```

4. **Start the development server**:
    ```sh
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

1. **Enter a city name** in the search bar.
2. **Click the "Search" button** to fetch and display the current weather and 5-day forecast for the entered city.

## Project Structure

- `src/components/Weather.js`: The main component for fetching and displaying weather data.
- `src/GlobalStyle.js`: Global styles for the app.
- `src/App.js`: The main application file that includes global styles and the Weather component.

## Dependencies

- [React](https://reactjs.org/)
- [axios](https://github.com/axios/axios)
- [styled-components](https://styled-components.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

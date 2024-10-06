# SatelliteSR-Frontend-Mobile

This is a React Native-based frontend built for iOS and Android devices to interact with the NASA SpaceApps 2024 challenge project "Satellite Reflectance Data: On the Fly and at Your Fingertips."

The mobile application allows users to access and visualize satellite overpass information and Enhanced Vegetation Index (EVI) data directly on their mobile devices, with seamless integration to the Flask-based backend for real-time data interaction.

## Features

- **Interactive Map**: Allows users to interact with the map to specify locations of interest, similar to the web application.
- **Satellite Overpass Data Visualization**: Displays upcoming and historical overpasses of Landsat 8 and Landsat 9 satellites.
- **EVI Overlay**: Visualizes the calculated Enhanced Vegetation Index for specific regions.
- **Push Notifications**: Notifies users when a satellite is expected to pass over their selected locations.
- **Responsive UI**: Optimized for both iOS and Android devices, providing a consistent and user-friendly experience.

## Setup

### Prerequisites

- Node.js and npm (Node Package Manager)
- Expo CLI (https://expo.dev/)

### Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/SatelliteSR-Frontend-Mobile.git
    cd SatelliteSR-Frontend-Mobile
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the project root and add the necessary environment variables:

    ```bash
    REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
    REACT_APP_BACKEND_URL=http://localhost:5000
    EXPO_DEV_TOOLS_PORT=19000
    ```

4. Start the application:

    ```bash
    npx expo start
    ```

The application will open in Expo Developer Tools, allowing you to run the app on an emulator or a physical device.

## Directory Structure

- `assets/`: Images, icons, and other static assets.
- `components/`: Reusable components across the application.
- `screens/`: Various screens used within the app (e.g., Home, Map, Settings).
- `navigation/`: React Navigation configuration for navigating between screens.
- `services/`: API services and utility functions for interacting with the backend.

## Endpoints (Interaction with Backend)

- **`/overpass`**: Fetches upcoming satellite overpass information.
- **`/historical_overpass`**: Retrieves historical satellite overpasses and metadata.
- **`/evi`**: Obtains Enhanced Vegetation Index data for visualization.

## How It Works

1. **Interactive Map**: Uses Google Maps API or Mapbox for mobile applications to allow users to select a point of interest.
2. **Data Submission**: Users can input coordinates directly or tap on the map to drop a pin. The data is sent to the Flask backend to retrieve relevant satellite and EVI information.
3. **EVI Overlay**: The calculated EVI from the backend is overlaid onto the map as a transparent layer for visual representation.

## Capabilities

- **User-Friendly Interface**: Optimized for mobile inputs, such as taps and gestures, to navigate through the app.
- **Push Notifications**: Users are notified about satellite overpasses and EVI updates for selected regions.
- **Environmental Visualization**: View vegetation health data as an overlay on the map.

## Use Cases

- **Farmers**: Monitor the health of crops by assessing EVI data directly on their mobile devices.
- **Urban Planners**: Evaluate green cover in urban areas using real-time satellite data.
- **Researchers**: Access and visualize environmental data directly from their phones or tablets.

## Contributing

Contributions are welcome! If you have suggestions or feature requests, please create an issue or open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)
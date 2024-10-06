import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, TextInput, Button, Alert, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function HomeScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [historyData, setHistoryData] = useState<any[]>([]);

  // Request location permissions
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      setMapRegion({
        ...mapRegion,
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    })();
  }, []);

  // Function to handle location input
  const handleLocationInput = () => {
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);
    if (!isNaN(lat) && !isNaN(lon)) {
      setMapRegion({
        ...mapRegion,
        latitude: lat,
        longitude: lon,
      });
    } else {
      Alert.alert('Invalid coordinates');
    }
  };

  // Dummy data for history
  const getHistoricalData = () => {
    // Assume historyData is populated here
    setHistoryData([
      {
        sceneId: 'LC08_L1TP_007029_20241004_20241004_02_RT',
        imageUrl: 'path/to/LC08_L1TP_007029_20241004_20241004_02_RT.jpg',
        satellite: 'Landsat 8',
        path: '007',
        acquisitionDate: '2024-10-04',
        processingDate: '2024-10-04',
      },
      {
        sceneId: 'LC09_L1TP_007029_20240926_20240926_02_T1',
        imageUrl: 'path/to/LC09_L1TP_007029_20240926_20240926_02_T1.jpg',
        satellite: 'Landsat 9',
        path: '007',
        acquisitionDate: '2024-09-26',
        processingDate: '2024-09-26',
      },
    ]);
  };

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <MapView
        style={{ height: 300 }}
        region={mapRegion}
        onRegionChangeComplete={(region) => setMapRegion(region)}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: mapRegion.latitude,
              longitude: mapRegion.longitude,
            }}
            title={'Selected Location'}
          />
        )}
      </MapView>
      <View style={{ padding: 10 }}>
        <Text>Enter Latitude and Longitude:</Text>
        <TextInput
          placeholder="Latitude"
          value={latitude}
          onChangeText={(text) => setLatitude(text)}
          keyboardType="numeric"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Longitude"
          value={longitude}
          onChangeText={(text) => setLongitude(text)}
          keyboardType="numeric"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Button title="Set Location" onPress={handleLocationInput} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title="Get Historical Data" onPress={getHistoricalData} />
      </View>
      <FlatList
        data={historyData}
        keyExtractor={(item, index) => `${item.sceneId}_${index}`}
        renderItem={({ item }) => (
          <View key={item.sceneId} style={{ marginBottom: 10 }}>
            <Image source={{ uri: item.imageUrl }} style={{ height: 150, width: '100%' }} />
            <Text>{`Satellite: ${item.satellite}`}</Text>
            <Text>{`Scene ID: ${item.sceneId}`}</Text>
            <Text>{`Path: ${item.path}`}</Text>
            <Text>{`Acquisition Date: ${item.acquisitionDate}`}</Text>
            <Text>{`Processing Date: ${item.processingDate}`}</Text>
          </View>
        )}
        ListHeaderComponent={
          <Text style={{ padding: 10, fontSize: 18, fontWeight: 'bold' }}>Historical Data</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

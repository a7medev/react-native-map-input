import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapInput from 'react-native-map-input';

const App = () => {
  const [coordinate, setCoordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Latitude: {coordinate.latitude}</Text>
        <Text style={styles.text}>Longitude: {coordinate.longitude}</Text>
      </View>
      <MapInput
        region={coordinate}
        onChange={setCoordinate}
        style={styles.map}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15
  },
  text: {
    fontSize: 20
  },
  map: {
    flex: 1
  }
});

export default App;

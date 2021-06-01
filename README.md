# react-native-map-input

> A React Native Component for Getting Location using a Map

### Example

```jsx
import React from 'react';
import MapInput from 'react-native-map-input';

const MyForm = () => {
  const [coordinate, setCoordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  return (
    // ...
    <MapInput
      region={coordinate}
      onChange={setCoordinate}
    />;
    // ...
  );
};
```

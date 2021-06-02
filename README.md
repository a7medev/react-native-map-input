# react-native-map-input

> A React Native Component for Getting Location using a Map

### Installation

It's really simple, just run:

```sh
yarn add react-native-map-input
```

or

```sh
npm install react-native-map-input --save
```

This package requires [react-native-maps](https://github.com/react-native-maps/react-native-maps) to be installed and configured to work correctly, follow these [instructions](https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md) on how to install it.

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

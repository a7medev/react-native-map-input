# react-native-map-input

> A React Native Component for Getting Location using a Map

![react-native-map-input example](./example.gif)

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

1. Usage with basic React state

   ```jsx
   import React, { useState } from 'react';
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
       />
       // ...
     );
   };
   ```

2. Usage with Formik

   ```jsx
   import React from 'react';
   import { Formik } from 'formik';
   import FormikMapInput from 'react-native-map-input/FormikMapInput';

   const initialValues = {
     // ...
     location: {
       latitude: 37.78825,
       longitude: -122.4324,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421
     }
     // ...
   };

   const MyForm = () => {
     const handleSubmit = data => {
       console.log(data.location);
     };

     return (
       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
         {() => (
           // ...
           <FormikMapInput name="location" />
           // ...
         )}
       </Formik>
     );
   };
   ```

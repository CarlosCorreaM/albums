//import a library to help to create a component
//import { AppRegistry } from 'react-native';

import React from 'react';
import { Text, AppRegistry } from 'react-native';

//create a component
//import App from './App';
const App = () => (
        <Text>Some Text</Text>
    );


//render it to the device
//AppRegistry.registerComponent('albums', () => App);

AppRegistry.registerComponent('albums', () => App);

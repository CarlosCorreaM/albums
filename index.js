//import a library to help to create a component
//import { AppRegistry, View } from 'react-native';

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList'

//create a component
//import App from './App';
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);


//render it to the device
//AppRegistry.registerComponent('albums', () => App);

AppRegistry.registerComponent('albums', () => App);

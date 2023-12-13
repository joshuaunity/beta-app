import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CurrentWeather from './src/components/CurrentWeather';
import DataList from './src/components/DataList';
import Goals from './src/components/Goals';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      {/* <DataList /> */}
      <Goals />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
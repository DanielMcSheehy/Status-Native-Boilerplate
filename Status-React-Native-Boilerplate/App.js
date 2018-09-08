import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import BoxScroll from './src/components/BoxScroll'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <BoxScroll />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FE',
    flexDirection: 'column',
  },
});

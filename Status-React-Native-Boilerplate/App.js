import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OuterContainer from './src/components/OuterContainer';

export default class App extends React.Component {

  
  render() {

    const styles = StyleSheet.create({
      outerWrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
      },
    });

    return (
      <View style={styles.outerWrapper}>
        <OuterContainer />
      </View>
    );
  }
}
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/';
import BoxScroll from './src/components/BoxScroll/'
import SideBar from './src/components/SideBar/'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.outerWrapper}>
        <SideBar />
         <View style={styles.container}>
        
         <Header />
         <BoxScroll />
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F8FE',
    flexDirection: 'column',
  },
});

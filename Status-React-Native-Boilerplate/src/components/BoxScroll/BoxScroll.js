import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    headerOuterWrapper: {
      height: 75,
      margin: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'grey',
        shadowOffset: { height: 0, width: 0 },
    },
    headerTitleWrapper: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'Helvetica',
    },
    
  });

const BoxScroll = ({  }) => {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.headerOuterWrapper}>
                <Text>What</Text>
            </View>
            <View style={styles.headerOuterWrapper}>
                <Text>What</Text>
            </View>
            <View style={styles.headerOuterWrapper}>
                <Text>What</Text>
            </View>
            <View style={styles.headerOuterWrapper}>
                <Text>What</Text>
            </View>
        </ScrollView>
    );
}

export default BoxScroll;

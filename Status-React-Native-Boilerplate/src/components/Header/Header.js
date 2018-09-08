import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    headerOuterWrapper: {
      alignSelf: 'stretch',
      height: 200,
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

const Header = ({  }) => {
    return (
        <View style={styles.headerOuterWrapper}>
            <Text style={styles.headerTitleWrapper}>What</Text>
            
      </View>
    );
}

export default Header;

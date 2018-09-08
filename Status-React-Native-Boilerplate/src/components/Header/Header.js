import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    headerOuterWrapper: {
        height: 200,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'grey',
        shadowOffset: { height: 0, width: 8 },
    },
    headerTitleWrapper: {
        fontSize: 30,
    },
    
  });

const Header = ({ toggleSideBar }) => {
    return (
        <View style={styles.headerOuterWrapper}>
            <View style = {styles.headerTitleWrapper}>
            <TouchableOpacity
                onPress={toggleSideBar}
            >
                <Text style = {styles.headerTitleWrapper}> &#9776; </Text>
            </TouchableOpacity>
            </View>
            
      </View>
    );
}

export default Header;

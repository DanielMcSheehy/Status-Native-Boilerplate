import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
    headerOuterWrapper: {
      alignSelf: 'stretch',
      height: 200,
      display: 'flex',
      
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'grey',
        shadowOffset: { height: 0, width: 8 },
    },
    headerTitleWrapper: {
        margin: 10,
        color: 'black',
        fontSize: 30,
        fontFamily: 'Helvetica',
    },
    
  });

const Header = ({ toggleSideBar }) => {
    return (
        <View style={styles.headerOuterWrapper}>
            <View >
                <Text style={styles.headerTitleWrapper}>&#9776;</Text>
                <Button
                    onPress={toggleSideBar}
                    title="&#9776;"
                    color="#841584"
                />
            </View>
            
      </View>
    );
}

export default Header;

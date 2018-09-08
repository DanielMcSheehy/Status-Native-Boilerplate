import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
    headerOuterWrapper: {
      
      height: 200,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { height: 0, width: 8 },
    },
    headerTitleWrapper: {
        fontSize: 50,
    },
    
  });

const Header = ({ toggleSideBar }) => {
    return (
        <View style={styles.headerOuterWrapper}>
            <View >
                <Button
                    titleStyle={styles.headerTitleWrapper}
                    onPress={toggleSideBar}
                    title="&#9776;"
                    color="#841584"
                />
            </View>
            
      </View>
    );
}

export default Header;

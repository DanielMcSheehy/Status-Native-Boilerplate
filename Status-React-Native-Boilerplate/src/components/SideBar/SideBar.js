import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    sideBarWrapper: {

        height: 1805,
        width: 75,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    
  });

const SideBar = ({  }) => {
    return (
        <View style={styles.sideBarWrapper}>
        </View>
    );
}

export default SideBar;

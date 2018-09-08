import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    sideBarWrapper: {
        height: 1805,
        width: 95,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    sideBarContent: {
        marginTop: 30,
    },
    sideBarCircle: {
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        width: 75,
        height: 75,
        borderRadius: 15,
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        

    }, 
    sideBarFont: {
       color: 'white',
        fontSize: 15,
    }, 
    
  });

const SideBar = ({ sideBarContent }) => {
    let boxes = sideBarContent.map((box) => <View style={styles.sideBarCircle}> 
        <Text style={styles.sideBarFont}> {box} </Text>
        </View>);
    return (
        <View style={styles.sideBarWrapper}>
            <ScrollView style={styles.sideBarContent}>
                {boxes}
            </ScrollView>
        </View>
    );
}

export default SideBar;

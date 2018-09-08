import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    boxScrollCard: {
        height: 75,
        margin: 20,
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderLeftWidth: 0,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'grey',
        shadowOffset: { height: 0, width: 0 },
    },
    boxScrollHeader: {
        marginRight: 10,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Helvetica',
    },
    boxScrollSubText: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Helvetica',
    },
    
  });

const BoxScroll = ({ contentText }) => {
    let cards = contentText.map((text) => <View style={styles.boxScrollCard}>
                    <Text style={styles.boxScrollHeader}>{text.header}</Text>
                    <Text style={styles.boxScrollSubText}>Price: {text.data}</Text>
                 </View>);
    return (
        <ScrollView horizontal={true}>
            {cards}
        </ScrollView>
    );
}

export default BoxScroll;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BoxScroll from './BoxScroll';

class BoxScrollController extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
  };
};

componentDidMount () { 
    
}

render() {
    return( 
      <View>
            <BoxScroll />
      </View>
    );
  }
}

export default BoxScrollController;

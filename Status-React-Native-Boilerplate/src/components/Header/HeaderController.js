import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';

class HeaderController extends React.Component {
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
            <Header toggleSideBar={this.props.toggleSideBar} />
      </View>
    );
  }
}

export default HeaderController;

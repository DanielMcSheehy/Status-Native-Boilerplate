import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';

class HeaderController extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
  };
  this.toggleSideBar = this.toggleSideBar.bind(this);
};

componentDidMount () { 
    
}

toggleSideBar() {
  alert('what');
}

render() {
    return( 
      <View>
            <Header toggleSideBar={this.toggleSideBar} />
      </View>
    );
  }
}

export default HeaderController;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideBar from './SideBar';

class SideBarController extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
  };
};

componentDidMount () { 

}

  
render() {
    let show = 0;
    return( 
      <View>
            {show && <SideBar />}
      </View>
    );
  }

}

export default SideBarController;

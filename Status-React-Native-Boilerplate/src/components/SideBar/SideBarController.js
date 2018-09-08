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
    let sideBarContent = ["Home", "Analytics", "Contact" ];
    return( 
      <View>
            {this.props.display && <SideBar sideBarContent={sideBarContent} />}
      </View>
    );
  }

}

export default SideBarController;

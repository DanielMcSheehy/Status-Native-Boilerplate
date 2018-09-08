import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Header';
import BoxScroll from '../BoxScroll';
import SideBar from '../SideBar';

class OuterContainer extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
        sideBarVisibility: false,
    };
  this.toggleSideBar = this.toggleSideBar.bind(this);
};

componentDidMount () {  

}

toggleSideBar() {
    this.setState({sideBarVisibility: !this.state.sideBarVisibility});
}

render() {
    const styles = StyleSheet.create({
        outerWrapper: {
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
        },
        container: {
           
          backgroundColor: '#F7F8FE',
          flexDirection: 'column',
        },
        content: {
        }
      });

    return( 
        <View style={styles.outerWrapper}>
            <SideBar display={this.state.sideBarVisibility} />
            <View style={styles.container}>      
                <Header toggleSideBar={this.toggleSideBar} />
                <View style={styles.content}>  
                  <BoxScroll />
                </View>
            </View>
            
      </View>
    );
  }

}

export default OuterContainer;

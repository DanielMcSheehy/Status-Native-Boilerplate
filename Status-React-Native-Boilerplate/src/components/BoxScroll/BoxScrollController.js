import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BoxScroll from './BoxScroll';

class BoxScrollController extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      priceData: [],
  };
  this.getCoinPrices = this.getCoinPrices.bind(this);
};

componentDidMount () {  //!
  //this.getCoinPrices();
}

getCoinPrices = async() => {
  let coin_cap = 3;
  let priceData = [];
  for (i = 1; i <= coin_cap; i++) {
    let response = await fetch(`https://api.coinmarketcap.com/v2/ticker/${i}/`);
    let data = await response.json();
    priceData.push(
      {
        id: data.data.id,
        name: data.data.name,
        price: data.data.quotes.USD.price,
      });
    }
    
    this.setState({priceData})
  }
  
  


render() {
    let contentText = this.state.priceData.map((coin) => {
      return {
        header: coin.name, 
        data: coin.price,
      };
    });
    
    return( 
      <View>
            <BoxScroll contentText={contentText} />
      </View>
    );
  }

}

export default BoxScrollController;

import { Text, View } from 'react-native';

import React from 'react';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import Game from './Game';
  
class MainScreen extends React.Component {

  render() {
    return (
      	<View style={{flex:1, justifyContent:'center', backgroundColor: '#fc5676'}}>
			<NavBar/>
			<Game/>
      	</View>
      );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(MainScreen);


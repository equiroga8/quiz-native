import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles/StyleSheet';

export default class NavBar extends React.Component {
  render() {
    return (
    	<View style= {styles.navBar}> 
    		<Text> QUIZ game</Text> 
    	</View>      
    );
  }
}
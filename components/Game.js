import React from 'react';
import { Text, View } from 'react-native';

import Content from './Content';
import ActionBar from './ActionBar';

export default class Game extends React.Component {
  render() {
    return (
    	<View>
    		<Content/>
      		<ActionBar/>
      	</View>      
    );
  }
}
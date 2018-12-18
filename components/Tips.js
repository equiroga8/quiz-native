import React from 'react';
import { Text, View, FlatList } from 'react-native';

import { styles } from '../styles/StyleSheet';

export default class Tips extends React.Component {
  render() {
  	var tips = this.props.tips.map((tip, index) => {
			return <Text key = {index}> {tip} </Text>;
		});
    return (
		    <View style = {styles.tips}>
       		<Text style = {styles.tipsTitle}>Tips:</Text> 
       		{tips}
       	</View>
    );
  }
}
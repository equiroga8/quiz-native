import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles/StyleSheet';

export default class Question extends React.Component {
  render() {
    return (
		<View style = {styles.question}>
       		<Text style = {styles.questionTitle}>Question {this.props.currentQuestion + 1}/10</Text> 
       		<Text style = {styles.questionContent}>{this.props.question}</Text>
       	</View>
    );
  }
}

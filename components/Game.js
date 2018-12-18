import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles/StyleSheet';
import Content from './Content';
import ActionBar from './ActionBar';

export default class Game extends React.Component {

	render() {
		return (
			<View style= {styles.game}>
				<Content question = {this.props.question}
				currentQuestion = {this.props.currentQuestion}
				onInputChange = {this.props.onInputChange}
				loading = {this.props.loading}
				score = {this.props.score}
				finished = {this.props.finished}/>
				
				<ActionBar buttonPress = {this.props.buttonPress} currentQuestion = {this.props.currentQuestion}
				 finished = {this.props.finished} areQuestionsStored = {this.props.areQuestionsStored}/>
			</View>      
			);
	}
}
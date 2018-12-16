import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles/StyleSheet';
import Content from './Content';
import ActionBar from './ActionBar';

export default class Game extends React.Component {

	constructor(props) {
		super(props);
		this.gamePress = this.gamePress.bind(this);
		this.gameAnswer = this.gameAnswer.bind(this);
	}

	gamePress(buttonAction){
		this.props.appPress(buttonAction);
	}
	
	gameAnswer(input) {
		this.props.appAnswer(input);
	}

	render() {
		return (
			<View style= {styles.game}>
				<Content question = {this.props.question}
				currentQuestion = {this.props.currentQuestion}
				gameAnswer = {this.gameAnswer}
				loading = {this.props.loading}
				score = {this.props.score}
				finished = {this.props.finished}/>
				<Text>{this.props.areQuestionsStored}</Text> 
				<ActionBar gamePress = {this.gamePress} currentQuestion = {this.props.currentQuestion}
				 finished = {this.props.finished} areQuestionsStored = {this.props.areQuestionsStored}/>
			</View>      
			);
	}
}
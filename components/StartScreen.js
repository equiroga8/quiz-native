import React from 'react';
import { Button } from 'react-native';

import { styles } from '../styles/StyleSheet';

export default class StartScreen extends React.Component {

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	onPress(){
		this.props.navigation.navigate('MainScreen');
	}
	render() {
		return (
			<Button title= "Start" color = "#841584" onPress = {this.onPress}/>
			);
	}
}

/*, {score: this.props.score, finished: this.props.finished, 
			currentQuestion: this.props.currentQuestion, questions: this.props.questions, 
			loading: this.props.loading, areQuestionsStored: this.props.areQuestionsStored}*/
import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../styles/StyleSheet';



export default class Answer extends React.Component {

	constructor(props) {
		super(props);
		this.onAnswer = this.onAnswer.bind(this);
	}

	onAnswer(input) {
		this.props.contentAnswer(input);
	}

	render() {
		return (
			<TextInput placeholder = "Type your answer here" style = {styles.textInput} 
			value = {this.props.userAnswer || ''} onChangeText = {this.onAnswer}/>
			);
	}
}
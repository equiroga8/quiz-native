import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from '../styles/StyleSheet';



export default class Answer extends React.Component {

	constructor(props) {
		super(props);
		this.onAnswer = this.onAnswer.bind(this);
	}

	onAnswer(input) {
		this.props.onInputChange(input);
	}

	render() {
		return (
			<View style = {styles.textInputContainer} >	
				<TextInput placeholder = "Type your answer here" style = {styles.textInput} 
				value = {this.props.userAnswer || ''} onChangeText = {this.onAnswer}/>				
			</View>
		);	
	}
}
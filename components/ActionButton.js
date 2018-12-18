
import React from 'react';
import { Button } from 'react-native';

import { styles } from '../styles/StyleSheet';

export default class ActionButton extends React.Component {

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	onPress(){
		this.props.buttonPress(this.props.buttonName);
	}
	render() {
		return (
			<Button title= {this.props.buttonName} color = "#9121C1" onPress = {this.onPress} disabled = {this.props.isDisabled}/>
			);
	}
}
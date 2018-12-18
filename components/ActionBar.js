import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles/StyleSheet';
import ActionButton from './ActionButton';

export default class ActionBar extends React.Component {

    render() {

        let submitDisabled = this.props.finished;
        let previousDisabled = (this.props.currentQuestion===0 || this.props.finished);
        let nextDisabled = (this.props.currentQuestion===9 || this.props.finished);

        return (
           <View style = {styles.actionBar}>
            <View style = {styles.firstButtonGroup}>
                <ActionButton buttonName = "Return" buttonPress = {this.props.buttonPress}/>  
                <ActionButton buttonName = "Previous" buttonPress = {this.props.buttonPress} isDisabled = {previousDisabled}/> 
                <ActionButton buttonName = "Next" buttonPress = {this.props.buttonPress} isDisabled = {nextDisabled}/>
                <ActionButton buttonName = "Submit" buttonPress = {this.props.buttonPress} isDisabled = {submitDisabled}/>    
            </View>
            <View style = {styles.secondButtonGroup}>
                <ActionButton buttonName = "Save" buttonPress = {this.props.buttonPress}/> 
                <ActionButton buttonName = "Load" buttonPress = {this.props.buttonPress} isDisabled = {!this.props.areQuestionsStored}/> 
                <ActionButton buttonName = "Remove" buttonPress = {this.props.buttonPress} isDisabled = {!this.props.areQuestionsStored}/>
                 
            </View>
           </View>		
           );
    }
}
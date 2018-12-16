import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles/StyleSheet';
import ActionButton from './ActionButton';

export default class ActionBar extends React.Component {

    constructor(props) {
        super(props);
        this.abPress = this.abPress.bind(this);
    }

    abPress(buttonAction){
        this.props.gamePress(buttonAction);
    }


    render() {

        let submitDisabled = this.props.finished;
        let previousDisabled = (this.props.currentQuestion===0 || this.props.finished);
        let nextDisabled = (this.props.currentQuestion===9 || this.props.finished);

        return (
           <View style = {styles.actionBar}>
            <View style = {styles.firstButtonGroup}>
                <ActionButton buttonName = "Return" abPress = {this.abPress}/>  
                <ActionButton buttonName = "Previous" abPress = {this.abPress} isDisabled = {previousDisabled}/> 
                <ActionButton buttonName = "Next" abPress = {this.abPress} isDisabled = {nextDisabled}/>
                <ActionButton buttonName = "Submit" abPress = {this.abPress} isDisabled = {submitDisabled}/>    
            </View>
            <View style = {styles.secondButtonGroup}>
                <ActionButton buttonName = "Save" abPress = {this.abPress}/> 
                <ActionButton buttonName = "Load" abPress = {this.abPress} isDisabled = {!this.props.areQuestionsStored}/> 
                <ActionButton buttonName = "Remove" abPress = {this.abPress} isDisabled = {!this.props.areQuestionsStored}/>
                 
            </View>
           </View>		
           );
    }
}
import React from 'react';
import { Text, View, ActivityIndicator, Image } from 'react-native';

import { styles } from '../styles/StyleSheet';
import QuestionAttachment from './QuestionAttachment';
import Question from './Question';
import Answer from './Answer';

export default class Content extends React.Component {


    constructor(props) {
        super(props);
        this.contentAnswer = this.contentAnswer.bind(this);
    }
    
    contentAnswer(input) {
        this.props.gameAnswer(input);
    }
    render() {

        if (this.props.loading) {
            return (
                <View style = {styles.content}>
                    <ActivityIndicator size="large"/>
                    <Text> Loading questions... </Text>
                </View>
                );
        }                                                                                                                       
        else if (this.props.finished){
            return (
                <View style = {styles.content}>
                    <Image style = {styles.questionAttachment} source = {require('../assets/gameOver.jpg')}/>
                    <Text>Score: {this.props.score}</Text>
                </View>
                );

        } else {    
            return (
             <View style = {styles.content}>
                <QuestionAttachment imageUrl = {this.props.question.attachment.url}/>
                <Question question = {this.props.question.question} 
                currentQuestion = {this.props.currentQuestion}/>
                <Answer contentAnswer = {this.contentAnswer} userAnswer = {this.props.question.userAnswer}/>
             </View>	
             );
        }
    }
}
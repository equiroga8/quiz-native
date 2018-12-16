import { Text, View, AsyncStorage } from 'react-native';

import React from 'react';
import { connect } from 'react-redux';

import { styles } from '../styles/StyleSheet';
import NavBar from './NavBar';
import Game from './Game';

import { questionAnswer, next, submit, receiveQuestions, requestQuestions, addStore, removeStore} from '../redux/actions';
  
class MainScreen extends React.Component {

  constructor(props) {
    super(props);
    this.appPress = this.appPress.bind(this);
    this.appAnswer = this.appAnswer.bind(this);
  }

  componentDidMount(){
    this.getQuestionsFromAPI().then((json) => {this.props.dispatch(receiveQuestions(json))});
    this.doesStoreExist();
  }

  async getQuestionsFromAPI() {
    this.props.dispatch(requestQuestions());
    let url = 'https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=f80ca6727cd7421aa815';
    var response = await fetch(url);
    var responseJson = await response.json();
    return responseJson;
  }
  async doesStoreExist(){
    try {
      var storedQuestions = await AsyncStorage.getItem('@P7_2018_IWEB:quiz');
      if(storedQuestions !== null){
        this.props.dispatch(addStore());
      }
      
    } catch(error) {}
  }
  async saveData(){
    try {
      // I might have to stringify
      var questions = JSON.stringify(this.props.questions)
      await AsyncStorage.setItem('@P7_2018_IWEB:quiz', questions);

      this.props.dispatch(addStore());
    } catch(error) {}
  }

  async loadData(){
    try {
      this.props.dispatch(requestQuestions());
      var storedQuestions = await AsyncStorage.getItem('@P7_2018_IWEB:quiz');
      if(storedQuestions !== null){
        var questions = JSON.parse(storedQuestions);
        this.props.dispatch(receiveQuestions(questions));
      }
      
    } catch(error) {}
  }

  async removeData(){
    try {
      await AsyncStorage.removeItem('@P7_2018_IWEB:quiz');
      this.props.dispatch(removeStore());
    } catch(error) {}
  }

  appPress(buttonAction){

    switch (buttonAction) {
      case "Submit":
        var ans = []
        var userAns = []
        this.props.questions.forEach((question) => {
          ans.push(question.answer.toLowerCase());
          if (question.userAnswer) {
            userAns.push(question.userAnswer.toLowerCase());
          } else {
            userAns.push(undefined);
          }
        });
        this.props.dispatch(submit(ans, userAns));
        break;
      case "Previous":
      case "Next":
         this.props.dispatch(next(buttonAction));
         break;
      case "Save":
        this.saveData();
        break;
      case "Load":
        this.loadData();
        break;
      case "Remove":
        this.removeData();
        break;
      default:
        break;  
    }
  }

  appAnswer(answer){
    this.props.dispatch(questionAnswer(this.props.currentQuestion, answer));
  }

  render() {
    return (
      	<View style={styles.mainScreen}>
			     <NavBar />
			     <Game question = {this.props.questions[this.props.currentQuestion]}
            currentQuestion = {this.props.currentQuestion} 
            score = {this.props.score} 
            finished = {this.props.finished}
            loading = {this.props.loading}
            appPress = {this.appPress}
            appAnswer = {this.appAnswer}
            areQuestionsStored = {this.props.areQuestionsStored}
           />
      	</View>
      );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(MainScreen);


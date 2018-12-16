import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
  	backgroundColor: '#b3ffcc'
  }, 

  mainScreen: {
  	flex:1,
  	padding: 6, 
  	justifyContent:'center', 
  	backgroundColor: '#fc5676'
  },

  navBar: {
  	flex:1, 
  	justifyContent:'space-around',
  	alignItems: 'center', 
  	backgroundColor: '#4d5906'
  },

  game: {
  	flex:9, 
  	justifyContent:'center', 
  	backgroundColor: '#0c5676'
  },

  content: {
  	flex:2, 
  	alignItems: 'center', 
  	backgroundColor: '#0c5d76'
  },

  actionBar: {
  	flex:1, 
  	justifyContent:'space-around',
  	alignItems: 'center', 
  	backgroundColor: '#0cb676'
  },

  questionAttachment: {
  	width: 300,
  	height: 200
  },

  question: {
  	justifyContent:'space-around',
  	alignItems: 'center', 
  	backgroundColor: '#0cb676'
  },

  questionTitle: {
	fontSize: 20
  },
  questionContent: {
	fontSize: 20
  },

  firstButtonGroup: {
	flexDirection: 'row'	
  },

  secondButtonGroup: {
	flexDirection: 'row'
  },


});
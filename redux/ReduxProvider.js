import React from 'react';

import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';

import { mockQuestions } from "../assets/mock-data";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../components/MainScreen';
import StartScreen from '../components/StartScreen';


const AppNavigator = createStackNavigator({
	MainScreen: { 
		screen: MainScreen 
	},
	StartScreen: {
		screen: StartScreen
	}
},{
	initialRouteName: 'StartScreen',
	headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);

export default class ReduxProvider extends React.Component {

	constructor(props) {
		super(props);
		this.initialState = { 
			score: 0, 
			finished: false, 
			currentQuestion: 0, 
			questions: [ ...mockQuestions ],
			loading: false, 
			areQuestionsStored: true
		};
		
		this.store = this.configureStore();
	}

	render() {

		return (
			<Provider store={ this.store }>
				<AppContainer />
			</Provider>		
		);
	}

	configureStore() {
		return createStore(GlobalState, this.initialState);

	}
}
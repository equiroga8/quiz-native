import React from 'react';
import MainScreen from '../components/MainScreen';

import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';

import { mockQuestions } from "../assets/mock-data";

import Navigator from '../components/Navigator';

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
				<Navigator/>
			</Provider>		
		);
	}

	configureStore() {
		return createStore(GlobalState, this.initialState);

	}
}
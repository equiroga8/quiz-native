import { combineReducers } from 'redux';

import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, REQUEST_QUESTIONS, 
	INIT_QUESTIONS} from './actions';

function score(state = 0, action = {}) {
	switch(action.type) {
		case SUBMIT:
		var score = 0;
			for (var i = 0; i < action.payload.answer.length; i++) {
				if (action.payload.answer[i] === action.payload.userAnswer[i]) {
					score++;
				}		
			}
			return score;
		default:
			return state;
	}
}

function finished(state = false, action = {}) {
	switch(action.type) {
		case SUBMIT:
			return true;
		case INIT_QUESTIONS:
			return false;
		default:
			return state;
	}
}

function currentQuestion(state = 0, action = {}) {
	switch(action.type) {
		case CHANGE_QUESTION:
			var newState;
			if (action.buttonPressed === "Next"){
				newState = state + 1;
			} else {
				newState = state - 1;
			}
			return newState;
		case INIT_QUESTIONS:
			return 0;
		default:
			return state;
	}
}

function questions(state = [], action = {}) {
	switch(action.type) {
		case INIT_QUESTIONS:
			return action.questions
		case QUESTION_ANSWER:
			return state.map((question, i) => {
				return { ...question,
						userAnswer: action.payload.index === i ?
									action.payload.answer : question.userAnswer
				}
			});
		default:
			return state;
	}
}

function loading(state = true, action = {}) {
	switch(action.type) {
		case REQUEST_QUESTIONS:
			return true;
		case INIT_QUESTIONS:
			return false;	
		default:
			return state;
	}
}


const GlobalState = (combineReducers({
	score,
	finished,
	currentQuestion,
	questions,
	loading
}));

export default GlobalState;
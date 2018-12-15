import React from 'react';
import { Text, View } from 'react-native';

import QuestionAttachment from './QuestionAttachment';
import Question from './Question';
import Answer from './Answer';

export default class Content extends React.Component {
  render() {
    return (
    	<View>
    		<QuestionAttachment/>
    		<Question/>
    		<Answer/>
    	</View>	
    );
  }
}
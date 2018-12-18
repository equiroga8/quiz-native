import React from 'react';
import { Image, View } from 'react-native';

import { styles } from '../styles/StyleSheet';

export default class QuestionAttachment extends React.Component {
  render() {
    return (
    	<View style = {styles.questionAttachmentContainer}>
			<Image style = {styles.questionAttachment} source = {{ uri: this.props.imageUrl }}/>
    	</View>
      
    );
  }
}
import React from 'react';
import { Image } from 'react-native';

import { styles } from '../styles/StyleSheet';

export default class QuestionAttachment extends React.Component {
  render() {
    return (
      <Image style = {styles.questionAttachment} source = {{ uri: this.props.imageUrl }}/>
    );
  }
}
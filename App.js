import React from 'react';
import ReduxProvider from './redux/ReduxProvider';

export default createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <ReduxProvider/>
    );
  }
}



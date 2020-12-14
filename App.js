
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import BookList from './Booklist';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false
    }

  }

  render() {
    return (
      <NavigationContainer initialRouteName="Home">


        <Stack.Navigator>
          <Stack.Screen name="Home"
            component={Home}
            options={{ headerShown: false }} />
          <Stack.Screen name="BookList"
            component={BookList}
            options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}

export default App;

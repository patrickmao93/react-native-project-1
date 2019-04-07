import React from 'react';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import AuthScreen from './src/screens/Auth/Auth';
import HomeScreen from './src/screens/Home/Home';
import PlacesScreen from './src/screens/Places/Places';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Places: PlacesScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Places') {
          iconName = `ios-planet`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthScreen,
    App: TabNavigator,
  },
  {
    initialRouteName: 'Auth',
  }
);

const store = configureStore();
const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
export default App;

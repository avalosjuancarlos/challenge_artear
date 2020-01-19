import {createAppContainer, Header} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Questions} from './components';

export const createAppNavigator = () => {
  const appStackNavigator = createStackNavigator(
    {
      Questions: {
        screen: Questions,
        navigationOptions: {
          headerTitle: 'Challenge Infinite Scroll',
        },
      },
    },
    {
      navigationOptions: {
        header: props => <Header {...props} />,
      },
      initialRouteName: 'Questions',
      headerMode: 'screen',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  );
  return createAppContainer(appStackNavigator);
};

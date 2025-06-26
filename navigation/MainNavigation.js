import Routes from './Routes';
import Home from '../screens/Home/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
}

export default MainNavigation;

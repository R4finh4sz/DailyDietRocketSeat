import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '@/src/screens/Groups';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={App} />
    </Navigator>
  );
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LinkedListPage from './components/linked-list-page';
import StackPage from './components/stack-page';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Linked List" component={LinkedListPage}/>
        <Tab.Screen name="Stack" component={StackPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



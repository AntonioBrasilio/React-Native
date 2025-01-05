import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from './src/pages/About';
import HomeScreen from './src/pages/Home';
import ContactScreen from './src/pages/Contact';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="About"
                    component={AboutScreen}
                    options={{
                        title: 'About Page',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="Contact"
                    component={ContactScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;


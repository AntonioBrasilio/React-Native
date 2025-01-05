import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesmome from 'react-native-vector-icons/FontAwesome';
import StackRoutes from './stackRoutes';
import AboutScreen from '../pages/About';
import ContactScreen from '../pages/Contact';

const Routes = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesmome
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesmome
                            name="info-circle"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesmome
                            name="phone"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Routes;

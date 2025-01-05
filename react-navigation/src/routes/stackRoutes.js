import DetailsScreen from '../pages/Details';
import HomeScreen from '../pages/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackRoutes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
            />
        </Stack.Navigator>
    );
};

export default StackRoutes;

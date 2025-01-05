import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

const App = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
};

export default App;


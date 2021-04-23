import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import { Welcome } from '../pages/Welcome';
import { UserIdentifier } from '../pages/UserIdentifier';
import { Confirmation } from '../pages/Confirmation';

//Styles
import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white,
            }
        }}
    >
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />
        <stackRoutes.Screen
            name="UserIdentifier"
            component={UserIdentifier}
        />
        <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />

    </stackRoutes.Navigator>

)

export default AppRoutes;
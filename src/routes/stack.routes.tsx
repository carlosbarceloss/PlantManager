import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Components - Views
import { Welcome } from '../pages/Welcome';
import { UserIdentifier } from '../pages/UserIdentifier';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';

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
        <stackRoutes.Screen
            name="PlantSelect"
            component={PlantSelect}
        />
    </stackRoutes.Navigator>

)

export default AppRoutes;
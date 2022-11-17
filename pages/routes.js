import {createBottomTabNavigator} from  '@react-navigation/botton-tabs'

import Pesquisar from './pages/Pesquisar'
import Historico from './pages/Historico'


const Tab = createBottomTabNavigator();

function Routes() {
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="Pesquisar"
            component={Pesquisar}
            />
            <Tab.Screen
            name="Historico"
            component={Historico}
            />
        </Tab.Navigator>

    )
}

export default Routes;
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/home';
import { NoteScreen } from '../screens/note';
import { CategoriesScreen } from '../screens/categories';

const Drawer = createDrawerNavigator();

/* const DrawerNavigatorConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Home:{
        screen:HomeScreen,
    },
    Categories:{
        screen:CategoriesScreen
    },
    Note:{
        screen:NoteScreen
    }
};

const AppNavigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
export default AppNavigator; */

export function Navigator() {
    return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Note" component={NoteScreen} />
        <Drawer.Screen name="Notes" component={CategoriesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
}
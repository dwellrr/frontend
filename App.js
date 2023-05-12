import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import {Navigator} from './src/navigations/appnav';

import {AppProvider, UserProvider} from '@realm/react';
import {appId, baseUrl} from './atlasConfig.json';
import {realmContext} from './RealmContext';
import { WelcomeView } from './src/screens/WelcomeView';



 /*
export default function App() {
  NavigationBar.setBehaviorAsync('overlay-swipe');
  NavigationBar.setVisibilityAsync("hidden");
  return (
    <View style={styles.container}>
      <Text style = {styles.def_text}>Hey bitch</Text>
      <StatusBar style= "light" translucent = {true} />
    </View>
  );
}
*/

////////////
const {RealmProvider} = realmContext;

const LoadingIndicator = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};

  export default function App() {
      return (
        <AppProvider id={appId} baseUrl = {baseUrl}>
          <UserProvider fallback={WelcomeView}>
          <RealmProvider
          sync={{
            flexible: true,
            onError: (_, error) => {
              // Show sync errors in the console
              console.error(error);
            },
          }}
          fallback={LoadingIndicator}>
          <Navigator/>
          </RealmProvider>
          </UserProvider>
        </AppProvider>
      );
}

/* export default function App() {
 return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Note" component={NoteScreen} />
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
} */

////////////

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  }
});

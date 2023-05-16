import { StyleSheet, Text, View, Button } from 'react-native';

export function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hey! Welcome Sophie's app. Swipe to open the drawer menu</Text>
      </View>
    );
  }
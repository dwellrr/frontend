import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function _onPressNewButton() {
    alert('You tapped the button!')
  }

export function ButtonAdd({_onPress}) {
    return (
    <View style={{borderWidth:0,position:'absolute',bottom:0,alignSelf:'flex-end'}}>
        <TouchableOpacity
        onPress={() => _onPress()}
        style={styles.newNoteButton}>
        <Text style={{fontSize: 25}}>+</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    newNoteButton: {
        margin: 10,
      fontSize: 50,
      width: 75,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'grey',
    }
  });
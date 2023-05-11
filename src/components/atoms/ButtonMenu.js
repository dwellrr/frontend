import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function ButtonMenu({_onPress, label}) {
    return(
        <TouchableOpacity onPress={() => _onPress()} style = {styles.buttonMenu}>
            <Text style = {styles.buttonMenuText}>{label}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    buttonMenu: {
        flex: 2,
        backgroundColor: "white",
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,

    },
    buttonMenuText: {
        color: "black",
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'serif'
    },
})
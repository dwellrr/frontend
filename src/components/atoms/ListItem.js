import { StyleSheet, TouchableOpacity, Text } from "react-native";

//item is a category, has atributes name and date, fetched from the database

const handleCatPress = (catId) => {
    console.log(`Pressed category with id ${catId.toString()}`);
    // Handle the button press here

  }

  
export const ListItem = ({item, onHold, onTap}) => (
    <TouchableOpacity onPress = {onTap} onLongPress = {onHold} style = {(styles.listItem)} key = {item._id}>
        <Text style = {(styles.listItemText)} key = {item._id}>{item.name}</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    listItem: {
        backgroundColor: "white",
        width: "100%",
        marginBottom: 10,
        marginLeft: 0,
        marginRight: 0,
        padding: 10
    },
    listItemText: {
        color: "black",
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'serif'
    },
})
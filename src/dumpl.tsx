{isVisible && (
    <View style = {styles.closeOpacity}>
    <TouchableOpacity 
            activeOpacity={1} 
            onPress={() => {console.log("HEY IM BEING PRESSED")}}>
                <Text style = {{fontSize: 50}}>this is where we close</Text>
    </TouchableOpacity>   
    </View>
)}
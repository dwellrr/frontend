import React, { useState, useEffect, useRef } from 'react'; 
import { Image, Modal, View, Button, Text, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
//import Animated from 'react-native-reanimated';

//closes on tapping out of the main footer. 

interface MyComponentProps {
    IdOfOpenCategoryMenu: string;
    setIdOfOpenCategoryMenu: (name: string) => void;
    nameOfOpenCategory: string;
    children?: React.ReactNode;
  }
  
  //export NODE_OPTIONS="--max-old-space-size=8192"
  //$env:NODE_OPTIONS="--max-old-space-size=8192"

export const ContextMenuFooter = (props: MyComponentProps): JSX.Element => {
    const { IdOfOpenCategoryMenu, setIdOfOpenCategoryMenu } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
// Function to open the bottom sheet 
// Function to close the bottom sheet
useEffect (() => {
    if (IdOfOpenCategoryMenu !== undefined && IdOfOpenCategoryMenu !== "") {
        handleOpenBottomSheet();
        console.log(IdOfOpenCategoryMenu)
        console.log(setIdOfOpenCategoryMenu)
    }
    else {
        handleCloseBottomSheet()
    }
}, [IdOfOpenCategoryMenu])
const handleOpenBottomSheet = () => {
    setIsOpen(true);
    console.log("Menu Opened!");
    //fadeIn()
    setIsVisible(true)
}
const handleCloseBottomSheet = () => {
    setIsOpen(false);
    console.log("Menu Closed!");
    setIdOfOpenCategoryMenu("");
    //fadeOut()
    setIsVisible(false)
};

const fadeAnim = useRef(new Animated.Value(0)).current;

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

/*const fadeIn = () => {
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
    }).start();
    console.log("WATCH ME MATERIALIZE")
};

const fadeOut = () => {
    Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
    }).start();
};
*/
    return (



<Modal
  animationType="slide"
  transparent={true}
  visible={isOpen}
  onRequestClose={()=>{handleCloseBottomSheet()}} 
  >
 <TouchableOpacity 
            style = {styles.container}
            activeOpacity={1} 
            onPressOut={() => {handleCloseBottomSheet()}}
          >
    <TouchableOpacity style={[styles.bottomSheet]} onPress={() => {console.log("HEY IM BEING PRESSED")}} >
   
      <View style={{ flex: 0, width: '100%', justifyContent: 'center', flexDirection: 'row' }}>
        <Text style = {{color: "black", fontSize: 20, marginBottom: 20}}>{props.nameOfOpenCategory}</Text>
      </View>        
      <View style={{flex: 1, flexDirection: 'row'}}>
            {props.children}
      </View>
     
      </TouchableOpacity>
      </TouchableOpacity> 
</Modal>




    );}

    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            justifyContent: 'center',
            alignItems: 'center'
        },
        closeOpacity: {
            position: 'absolute',
            left:     0,
            top:      0,
            bottom: 0,
            right: 0,
            opacity: 0.5, 
            backgroundColor: 'black',
        },
        bottomSheet: {
            flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'white',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingVertical: 23,
            paddingHorizontal: 25,
            bottom: 0,
        },
    });
    
    
/*
const TAB_BAR_HEIGHT = 0;

renderContent = () => {
    return (
        <View>
            <Text>Get directions to your location</Text>
        </View>
    )
}

export function ContextMenuFooter() {
    return (
            <BottomDrawer
                containerHeight={100}
                offset={TAB_BAR_HEIGHT}
                startUp = {false}
            >
                {renderContent()}
            </BottomDrawer>
    )
}
*/
import {
    TextInput,
    Modal,
    StyleSheet,
    View,
    TouchableWithoutFeedback
  } from 'react-native';
  import {ButtonMenu} from '../atoms/ButtonMenu'
  
export function RenameModal({openModal, setOpenModal, defaultText}) {
    return(
  <Modal transparent={true}
   visible={openModal}
   onRequestClose={() => setOpenModal(false)}
   animationType='fade'>

    <TouchableWithoutFeedback onPress={() => setOpenModal(false)}>
        <View style = {styles.modalBody}>
    <TouchableWithoutFeedback onPress={() => {}}>
        <View style = {styles.mainPanel} >
        <TextInput
      style={styles.input}
      placeholder="Type here :)"
      defaultValue={defaultText}
      autoFocus={true}
      textAlign='center'
    />
    <ButtonMenu _onPress={() => console.log("heya")} label= 'Save'/>
    </View>
    </TouchableWithoutFeedback>
        </View>
    </TouchableWithoutFeedback>
  </Modal> 
    );
}
    
   const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 5,
      marginBottom: 10,
      borderWidth: 1,
    },
    modalBody: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center'

    },
    mainPanel: {
        width: 300,
        height: 120,
        padding: 5,
        justifyContent: 'center',
        backgroundColor: 'white'
    }
  }); 
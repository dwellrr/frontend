import {
    TextInput,
    Modal,
    StyleSheet,
    View,
    TouchableWithoutFeedback
  } from 'react-native';
  import {ButtonMenu} from '../atoms/ButtonMenu'
  import { useState } from 'react';
  
  type Props = {
    onSubmit: ({name}: {name: string}) => void;
    openModal;
    setOpenModal;
    defaultText
  };

export function RenameModal(props: Props): React.ReactElement<Props> {
    
  const [name, setName] = useState('');
  return(
  <Modal transparent={true}
   visible={props.openModal}
   onRequestClose={() => props.setOpenModal(false)}
   animationType='fade'>

    <TouchableWithoutFeedback onPress={() => props.setOpenModal(false)}>
        <View style = {styles.modalBody}>
    <TouchableWithoutFeedback onPress={() => {}}>
        <View style = {styles.mainPanel} >
        <TextInput
      style={styles.input}
      placeholder="Type here :)"
      onChangeText={(text: string) => setName(text)}
      defaultValue={props.defaultText}
      autoFocus={true}
      textAlign='center'
    />
    <ButtonMenu _onPress={() => props.onSubmit({name})} label= 'Save'/>
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
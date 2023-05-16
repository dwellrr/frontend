import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useCallback, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { BSON } from 'realm';
import {realmContext} from '../../RealmContext';
import {useUser} from '@realm/react';
import {Cat} from '../CatSchema';
import { useFocusEffect } from '@react-navigation/native'; 
import React from 'react';

const {useRealm, useQuery} = realmContext;


export function NoteScreen( {route, navigation} ) {
  

  const { idid } = route.params;

  
  const realm = useRealm();
  console.log(idid + " this is the idid in Note")
  const user = useUser();


  const item = realm.objectForPrimaryKey(Cat, idid); // search for a realm object with a primary key that is an objectId
  const catName = item.name
  navigation.setOptions({ title: catName })
  

  
  console.log(item.toJSON() + " Item in Note")

  const changeItemText = useCallback(
    (newText: string, _id: BSON.ObjectId) => {
      const bitem = realm.objectForPrimaryKey(Cat, _id); 
      if (bitem) {
        realm.write(() => {
          bitem.noteText = newText
        });
    }
    },
    [realm, user],
  );

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey' }}>
        <ScrollView style={styles.inputField}>
        <TextInput 
        style = {styles.textInField}
        autoFocus = {true}
        multiline = {true}
        defaultValue= {item.noteText}
        textAlign='left'
        onChangeText={(text: string) => changeItemText(text, item._id)}
        ></TextInput>
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    inputField: {
      flex: 1,
      width: "100%",
      padding: 10,
      backgroundColor: "white"
    },
    textInField:{
      fontSize: 15,
    }
  })
import { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import { isPartiallyEmittedExpression } from 'typescript';
import { ButtonAdd } from '../components/atoms/ButtonAdd';
import { ListItem } from '../components/atoms/ListItem';
import Cats from '../api/cats';
import { ContextMenuFooter } from '../components/atoms/ContextMenuFooter';
import { ButtonMenu } from '../components/atoms/ButtonMenu';
import { RenameModal } from '../components/molecules/RenameModal';

import {useUser} from '@realm/react';
import {realmContext} from '../../RealmContext';
import {Cat} from '../CatSchema';
import { BSON } from 'realm';

const {useRealm, useQuery} = realmContext;
const itemSubscriptionName = 'everything';


export function CategoriesScreen({ navigation }) {

  const realm = useRealm();
  const items = useQuery(Cat).sorted('_id');
  const user = useUser();

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Cat), {name: itemSubscriptionName});
    });
}, [realm]);
console.log(items);

  const [OpenMenuCategoryId, setOpenMenuCategoryId] = useState("");
  const [OpenMenuCategoryName, setOpenMenuCategoryName] = useState("");
  const OpenPopup = (CatId, CatName) => {
    console.log(CatId + " this is CatId");
    console.log(CatName + " this is CatName");
    setOpenMenuCategoryId(CatId);
    setOpenMenuCategoryName(CatName);
  };
  const GoToNote = (CatId) => {
    const idid = new BSON.ObjectId(CatId);
    navigation.navigate('Note', {idid});
  }
  const [openRenameModal, setOpenRenameModal] = useState(false);
  const [isNewCat, setIsNewCat] = useState(false);

  function passName(n) {
    if (isNewCat) {
      createItem(n.name) 
    }
    else {
      
      renameItem(OpenMenuCategoryId, n.name)
    }
  }

  
  const createItem = useCallback(
    (name: string) => {
      // if the realm exists, create an Item
      realm.write(() => {
        return new Cat(realm, {
          name,
          dateCreated: new Date(),
          noteText: ""
        });
      });
    },
    [realm, user],
  );

  const deleteItem = useCallback(
    (id: string) => {
      // if the realm exists, get the Item with a particular _id and delete it
      const idid = new BSON.ObjectId(id)
      const item = realm.objectForPrimaryKey(Cat, idid); // search for a realm object with a primary key that is an objectId
      if (item) {
          realm.write(() => {
            realm.delete(item);
          });
        }
    },
    [realm, user],
  );

  const renameItem = useCallback(
    (id: string,_name: string) => {
      // if the realm exists, get the Item with a particular _id and delete it
      const idid = new BSON.ObjectId(id)
      const item = realm.objectForPrimaryKey(Cat, idid); // search for a realm object with a primary key that is an objectId
      if (item) {
          realm.write(() => {
            item.name = _name
          });
      }
    },
    [realm, user],
  );

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Cats onCategoryHold={OpenPopup} onCategoryTap={GoToNote} items={items}></Cats>
        <ContextMenuFooter IdOfOpenCategoryMenu = {OpenMenuCategoryId} setIdOfOpenCategoryMenu = {setOpenMenuCategoryId} nameOfOpenCategory = {OpenMenuCategoryName}>
          <View style = {{flex: 1, flexDirection: 'row'}}>
            <ButtonMenu _onPress={() => {setOpenRenameModal(true); setIsNewCat(false)}} label = 'rename'/>
            <ButtonMenu _onPress={() => {deleteItem(OpenMenuCategoryId), setOpenMenuCategoryId("")}} label = 'delete'/>
          </View>
          
        </ContextMenuFooter>
        <RenameModal onSubmit={({name}) => passName({name})} openModal={openRenameModal} setOpenModal={setOpenRenameModal} defaultText={OpenMenuCategoryName}/>
        <ButtonAdd _onPress = {
          () => {setOpenRenameModal(true); setOpenMenuCategoryName("NewCategory"); setIsNewCat(true)}}/>
      </View>
    );

  }
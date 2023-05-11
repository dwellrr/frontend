import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import { isPartiallyEmittedExpression } from 'typescript';
import { ButtonAdd } from '../components/atoms/ButtonAdd';
import { ListItem } from '../components/atoms/ListItem';
import Cats from '../api/cats';
import { ContextMenuFooter } from '../components/atoms/ContextMenuFooter';
import { ButtonMenu } from '../components/atoms/ButtonMenu';
import { RenameModal } from '../components/molecules/RenameModal';

export function CategoriesScreen({ navigation }) {

  const [OpenMenuCategoryId, setOpenMenuCategoryId] = useState("");
  const [OpenMenuCategoryName, setOpenMenuCategoryName] = useState("");
  const OpenPopup = (CatId, CatName) => {
    console.log(CatId + " this is CatId");
    console.log(CatName + " this is CatName");
    setOpenMenuCategoryId(CatId);
    setOpenMenuCategoryName(CatName);
  };
  const [openRenameModal, setOpenRenameModal] = useState(false);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Cats onCategoryHold={OpenPopup}></Cats>
        <ContextMenuFooter IdOfOpenCategoryMenu = {OpenMenuCategoryId} setIdOfOpenCategoryMenu = {setOpenMenuCategoryId} nameOfOpenCategory = {OpenMenuCategoryName}>
          <View style = {{flex: 1, flexDirection: 'row'}}>
            <ButtonMenu _onPress={() => setOpenRenameModal(true)} label = 'rename'/>
            <ButtonMenu _onPress={() => console.log("hey :)")} label = 'delete'/>
          </View>
          
        </ContextMenuFooter>
        <RenameModal openModal={openRenameModal} setOpenModal={setOpenRenameModal} defaultText={OpenMenuCategoryName}/>
        <ButtonAdd _onPress = {
          () => {setOpenRenameModal(true); setOpenMenuCategoryName("NewCategory")}}/>
      </View>
    );

  }
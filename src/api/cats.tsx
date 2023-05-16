import { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import { ListItem } from '../components/atoms/ListItem';



function Cats ({onCategoryHold, onCategoryTap, items}) {
    
  const renderItem = ({ item }) => (
    <ListItem item={item} onHold = {() => onCategoryHold(item._id, item.name)} onTap = {() => onCategoryTap(item._id)}/>
  );
  return (
      <View style = {styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
      />
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 10,
    }
})
export default Cats
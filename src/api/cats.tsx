import { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import { ListItem } from '../components/atoms/ListItem';

import {useUser} from '@realm/react';
import {realmContext} from '../../RealmContext';
import {Cat} from '../CatSchema';

const {useRealm, useQuery} = realmContext;
const itemSubscriptionName = 'everything';

function Cats ({onCategoryHold}) {
  const realm = useRealm();
  const items = useQuery(Cat).sorted('_id');
  const user = useUser();

  
  useEffect(() => {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.add(realm.objects(Cat), {name: itemSubscriptionName});
      });
  }, [realm]);


  console.log(items);

  

  
  const renderItem = ({ item }) => (
    <ListItem item={item} onHold = {() => onCategoryHold(item._id, item.name)}/>
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
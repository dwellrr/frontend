import {BSON} from 'realm';

export class Cat extends Realm.Object<Cat> {
  _id!: BSON.ObjectId;
  name!: string;
  dateCreated!: Date;

  static schema: Realm.ObjectSchema = {
    name: 'Categories',
    primaryKey: '_id',
    properties: {
      // This allows us to automatically generate a unique _id for each Item
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      // All todo items will default to incomplete
      name: 'string',
      dateCreated: 'date'
    },
  };
}

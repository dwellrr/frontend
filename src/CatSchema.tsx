
import {BSON} from 'realm';

export class Cat extends Realm.Object<Cat> {
  _id!: BSON.ObjectId;
  name!: string;
  dateCreated!: Date;
  noteText!: string;

  static schema: Realm.ObjectSchema = {
    name: 'Cat',
    primaryKey: '_id',
    properties: {
      // This allows us to automatically generate a unique _id for each Item
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      name: 'string',
      dateCreated: 'date',
      noteText: 'string'
    },
  };
}

import {createRealmContext} from '@realm/react';
import {Cat} from './src/CatSchema';

export const realmContext = createRealmContext({
  schema: [Cat],
});

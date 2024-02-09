import {dbConnection} from './mongoConnection.js';
const getCollections = (collection) => {
    let _col = undefined;
  
    return async () => {
      if (!_col) {
        const db = await dbConnection();
        _col = await db.collection(collection);
      }
  
      return _col;
    };
};

// WN - waiting on the names for the collections to connect - faux db incase original is incorrent
// export const users = getCollections('users');
//export const posts = getCollections('posts');
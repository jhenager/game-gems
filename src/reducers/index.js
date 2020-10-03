import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterGameList: gameListReducer,
  firestore: firestoreReducer
});

export default rootReducer;
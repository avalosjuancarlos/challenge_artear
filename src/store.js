import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {QuestionsReducer} from './components/questions';

const rootReducer = combineReducers({
  QuestionFeed: QuestionsReducer,
});

// This just allows for multiple middlewares to be integrated with redux
const middleware = [];
middleware.push(thunk);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['QuestionFeed'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export default {store, persistor};

import { createStore, combineReducers } from 'redux';
import reducer  from './reducer';
const rootreducer = combineReducers({reducer,
});
const store = createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
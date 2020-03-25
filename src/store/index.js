import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import list from './list';
import user from './user';
import details from './details';

const reducers = combineReducers({
    list,
    user,
    details
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
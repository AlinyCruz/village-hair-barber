import { combineReducers } from 'redux';
import { user } from './user';

const rootReducer = combineReducers({ player: user });

export default rootReducer;

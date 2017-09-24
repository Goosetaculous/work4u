import { combineReducers } from 'redux';
import UserReducer from './reducers_users';

const allReducers =  combineReducers({
    users: UserReducer
})

export default allReducers

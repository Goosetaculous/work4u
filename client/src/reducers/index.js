import { combineReducers } from 'redux';
import UserReducer from './reducers_users';
import LoggedInUser from './reducer_active_user';

const allReducers =  combineReducers({
    //users: UserReducer,
    activeUser: LoggedInUser,

})

export default allReducers

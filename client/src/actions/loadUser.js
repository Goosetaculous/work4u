import API from '../utils/API'

export function loadUser(){
    return function(dispatch){
        return  API.getUser(localStorage.getItem('user_id')).then((res) => {
            console.log("WOHOO")
            dispatch(loadUserSuccess(res.data[0]))
        }).catch(error => {
            throw(error);
        })
    }
}

export function loadUserSuccess(user){
    console.log(user)
    return {type: 'LOAD_USER_SUCCESS',user}
}
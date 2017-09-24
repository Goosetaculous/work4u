export default function(state = {}, action){
    switch (action.type){
        case "LOGGED_IN_USER":
            console.log("FROM reducer_active_user ",action.payload)
            return action.payload
        break
    }
    return state
}
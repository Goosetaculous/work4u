export default function(state = null,action){
    switch (action.type){
        case "USER_IMPORTED":
            return action.payload
        break

    }
    return state
}
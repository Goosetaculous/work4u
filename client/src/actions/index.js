//ACTION CREATORS

export const selectUser=(test)=>{
    console.log("click THIS")
    return{
        type:"USER_IMPORTED",
        payload: test
    }
};
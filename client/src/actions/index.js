//ACTION CREATORS

export const loggedInUser=(user)=>{
    console.log("FROM LOGGEDINUSER ACTION CREATOR")
    return{
        type:"LOGGED_IN_USER",
        payload: user
    }
};
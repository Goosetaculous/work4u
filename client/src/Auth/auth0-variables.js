var callbackUrl
if (process.env.NODE_ENV === "production"){
    callbackUrl='https://work4u.herokuapp.com/callback'

}else if(process.env.NODE_ENV === "development"){
    callbackUrl='https://work4u-dev.herokuapp.com/callback'

}else {
    callbackUrl='http://localhost:3000/callback'
}
export const AUTH_CONFIG = {
  domain: 'jonathanthinh.auth0.com',
  clientId: 'Y1J7wHC7JktSj70xG0opZEi4rN7F24tg',
        callbackUrl
}

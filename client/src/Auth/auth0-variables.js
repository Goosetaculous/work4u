var cbURL
if (process.env.NODE_ENV === "production"){
    cbURL='https://work4u.herokuapp.com/callback'

}else if(process.env.NODE_ENV === "development"){
    cbURL='https://work4u-dev.herokuapp.com/callback'

}else {
    cbURL='http://localhost:3000/callback'
}
export const AUTH_CONFIG = {
  domain: 'jonathanthinh.auth0.com',
  clientId: 'Y1J7wHC7JktSj70xG0opZEi4rN7F24tg',
    callbackUrl: cbURL
}

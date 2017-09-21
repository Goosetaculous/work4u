var cbURL
switch (process.env.NODE_ENV) {
    case "production":
        cbURL='https://work4u.herokuapp.com/callback'
        break
    case "development":
        cbURL='https://work4u-dev.herokuapp.com/callback'
        break;
    default:
        cbURL='http://localhost:3000/callback'
}

console.log(process.env.NODE_ENV+" "+cbURL)
export const AUTH_CONFIG = {
  domain: 'jonathanthinh.auth0.com',
  clientId: 'Y1J7wHC7JktSj70xG0opZEi4rN7F24tg',
    callbackUrl: cbURL
}




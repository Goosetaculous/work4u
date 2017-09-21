
console.log(process.env.AUTHO_CB_URL)
console.log(process.env.AUTHO_CB_URL || 'http://localhost:3000/callback')
export const AUTH_CONFIG = {
  domain: 'jonathanthinh.auth0.com',
  clientId: 'Y1J7wHC7JktSj70xG0opZEi4rN7F24tg',
    callbackUrl: process.env.AUTHO_CB_URL || 'http://localhost:3000/callback'
}




// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAjTYTq5AE3euuSoXxXnrtxTfeKy6OO8Eo',
    authDomain: 'pwa-ang.firebaseapp.com',
    databaseURL: 'https://pwa-ang.firebaseio.com',
    projectId: 'pwa-ang',
    storageBucket: 'pwa-ang.appspot.com',
    messagingSenderId: '67588518211'
  }
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  title: '',
  production: false,
  debugLog: true,
  errorToasts: true,
  defaultTenant: 'root',
  apiUrl: 'http://api-crm.belsio.online:5001/api/v1',
  googleApiConfig:{
    clientId:'240109242408-uhmkr4lf9h5jsin0tpl0r40g49a15952.apps.googleusercontent.com'
  },
  firebaseConfig: {
    apiKey: 'AIzaSyBvPKCGS_izJPX9Jp8aKLNVDLPz8xvM5Ms',
    authDomain: 'belsio-crm-preview.firebaseapp.com',
    projectId: 'belsio-crm-preview',
    storageBucket: 'belsio-crm-preview.appspot.com',
    messagingSenderId: '790241265581',
    appId: '1:790241265581:web:573f9c7880ae852d6a4324',
    measurementId: 'G-NVGQ6SQ4MC',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

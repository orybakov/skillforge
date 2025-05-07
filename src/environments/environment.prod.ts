import {IEnvironment} from '../app/core/environments/environment.interface';

export const environment: IEnvironment = {
  production: true,
  locale: 'ru',
  runtimeEnvUrl: '/',
  firebaseConfig: {
    apiKey: "apiKey",
    authDomain: "authDomain",
    databaseURL: "databaseURL",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "appId",
    measurementId: "measurementId"
  }

}

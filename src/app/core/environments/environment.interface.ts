import {FirebaseOptions} from '@firebase/app';

export interface IEnvironment {
  production: boolean;
  locale: string;
  runtimeEnvUrl: string;
  firebaseConfig: FirebaseOptions
}

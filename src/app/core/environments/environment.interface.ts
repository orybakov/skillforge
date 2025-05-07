import { Locale } from '@t1-collection/utils';

export interface IEnvironment {
  production: boolean;
  locale: Locale;
  runtimeEnvUrl: string;
  services: { [key: string]: string };
  endpoints: { [key: string]: string };
  availableExchangeRates: string[] | 'all';
  staticUrl: string;
}

export enum EnvironmentStand {
  dev = 't1coll-dev.t1-consulting.ru',
  stage = 't1coll-stage.t1-consulting.ru',
  rc = 't1coll-rc.t1-consulting.ru',
  locale = 'localhost'
}

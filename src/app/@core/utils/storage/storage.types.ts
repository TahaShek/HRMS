import { AppTheme } from '@services/theme';

type StorageObjectMap = {
  'belsio/session': {
    token: string;
    refreshToken:string;
    refreshTokenExpiryTime: Date;
    user: number | string;
    tenent: number | string;
  };
  'App/theme': AppTheme;
};

export type StorageObjectType = 'belsio/session' | 'App/theme';

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};

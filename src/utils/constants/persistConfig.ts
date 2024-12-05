import AsyncStorage from '@react-native-async-storage/async-storage';

export const PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth']
};

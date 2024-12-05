import SInfo from 'react-native-sensitive-info';
import {
  KEY_CHAIN_OPTIONS,
  REFRESH_TOKEN,
  TOKEN,
  TOKEN_TYPE
} from '../constants/sensetiveInfo';

export async function getItem<T>(key: string): Promise<T | null> {
  const value = await SInfo.getItem(key, KEY_CHAIN_OPTIONS);
  return value ? JSON.parse(value)?.[key] || null : null;
}

export async function setItem<T>(key: string, value: T): Promise<void> {
  SInfo.setItem(key, JSON.stringify({ [key]: value }), KEY_CHAIN_OPTIONS);
}
export async function removeItem(key: string): Promise<void> {
  SInfo.deleteItem(key, KEY_CHAIN_OPTIONS);
}

export const getToken = () => getItem<string>(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: string) => setItem<string>(TOKEN, value);

export const getRefreshToken = () => getItem<string>(REFRESH_TOKEN);
export const removeRefreshToken = () => removeItem(REFRESH_TOKEN);
export const setRefreshToken = (value: string) =>
  setItem<string>(REFRESH_TOKEN, value);

export const getTokenType = () => getItem<string>(TOKEN_TYPE);
export const removeTokenType = () => removeItem(TOKEN_TYPE);
export const setTokenType = (value: string) =>
  setItem<string>(TOKEN_TYPE, value);

export const retrieveToken = async () => {
  const retrievedToken = await getToken();
  if (retrievedToken != null) {
    return retrievedToken;
  }
};

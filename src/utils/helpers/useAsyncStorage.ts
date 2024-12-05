import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLocalStorage = (key: string) => {
  const [storedValue, setStoredValue] = useState(null);

  const storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      setStoredValue(value);
    } catch (e) {
      console.error('Error storing data:', e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(key);
      setStoredValue(value ? JSON.parse(value) : '');
    } catch (e) {
      console.error('Error retrieving data:', e);
    }
  };

  useEffect(() => {
    getData();
  }, []); // Fetch the data on component mount

  return [storedValue, storeData];
};

export default useLocalStorage;

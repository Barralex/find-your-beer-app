import AsyncStorage from "@react-native-community/async-storage";

class Storage {
  set = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (err) {
      console.log(err);
    }
  };

  get = async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      console.log(err);
    }
  };

  getAll = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      return await AsyncStorage.multiGet([...keys]);
    } catch (err) {
      console.log(err);
    }
  };

  remove = async (key) => {
    try {
      return await AsyncStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  };
}

export default new Storage();

import AsyncStorage from "@react-native-async-storage/async-storage";

export const Get_shareddata = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("shared_object");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error({ Get_shareddata: e });
  }
};

export const Set_shareddata = async () => {
  try {
    let isVisibleSplash = true;
    let token = "";
    let isLogin = false;

    const jsonValue = JSON.stringify({ isVisibleSplash, token, isLogin });
    await AsyncStorage.setItem("shared_object", jsonValue);
  } catch (e) {
    console.error({ Set_shareddata: e });
  }
};
/**
 *
 * @param {{isLogin : string, isVisibleSplash: string, token :string }} param0
 */
export const Update_Mobilestore_Variable = async ({
  isVisibleSplash,
  token,
  isLogin,
}) => {
  try {
    const sobj = await AsyncStorage.getItem("shared_object");
    if (!!sobj) {
      let obj = JSON.parse(sobj);
      let newObj = {};
      if (!!token) {
        newobj = {
          ...obj,
          token,
        };
      }
      if (!!isLogin) {
        newobj = {
          ...obj,
          isLogin,
        };
      }

      if (!!isVisibleSplash) {
        newobj = {
          ...obj,
          isVisibleSplash,
        };
      }
      const jsonValue = JSON.stringify(newobj);
      await AsyncStorage.setItem("shared_object", jsonValue);
    }
  } catch (e) {
    console.error({ shared_object: e });
  }
};

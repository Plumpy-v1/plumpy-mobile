import AsyncStorage from "@react-native-async-storage/async-storage";

export const Get_shareddata = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("shared_object");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error({ Get_shareddata: e });
  }
};

export const DefaultState = async () => {
  try {
    let isVisibleSplash = true;
    let token = "";
    let isLogin = false;
    let userName = "";

    const jsonValue = JSON.stringify({
      isVisibleSplash,
      token,
      isLogin,
      userName,
    });
    await AsyncStorage.setItem("shared_object", jsonValue);
  } catch (e) {
    console.error({ DefaultState: e });
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
  userName,
}) => {
  try {
    const sobj = await AsyncStorage.getItem("shared_object");
    console.log({ userName });

    if (!!sobj) {
      let obj = JSON.parse(sobj);
      let newObj = { ...obj };
      if (!!token) {
        newObj = {
          ...newObj,
          token: token,
        };
      }
      if (!!isLogin) {
        newObj = {
          ...newObj,
          isLogin: isLogin,
        };
      }

      if (!!isVisibleSplash) {
        newObj = {
          ...newObj,
          isVisibleSplash: isVisibleSplash,
        };
      }
      if (!!userName) {
        newObj = {
          ...newObj,
          userName: userName,
        };
      }
      console.log({ newObj, obj });
      const jsonValue = JSON.stringify(newObj);
      // console.log({ jsonValue });
      await AsyncStorage.setItem("shared_object", jsonValue);
    }
  } catch (e) {
    console.error({ shared_object: e });
  }
};
